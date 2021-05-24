import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit {

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router) { }

  student:Student=new Student();
  sub:Subscription=new Subscription();
  studentId!: number;
  institutionName!: String;
  userId:string = this.route.snapshot.url[1].path;
  fullName!: string;

  ngOnInit(): void 
  {
    let link = document.getElementById('carousel');
    if(link != null)
    {
      link.style.display = "none";
    }
    let link1 = document.getElementById('marquee');
    if(link1 != null)
    {
      link1.style.display = "none";
    }
    let link2 = document.getElementById('content-row');
    if(link2 != null)
    {
      link2.style.display = "none";
    }
    let link3 = document.getElementById('footer-row');
    if(link3 != null)
    {
      link3.style.display = "none";
    }


    this.sub=this.route.params.subscribe(params =>
      {
        const userid=params['userId'];
        if(userid)
        {
          this.studentService.getByUserId(this.userId).subscribe((data : any) =>
          {
            if(data)
            {
              if(data.fullName !==undefined)
              {
                this.fullName=data.fullName;
              }
              else
              {
                console.log(`Student with $(this.userId) not found`);
              }
            }
          }
          );
        }
      }
      );
  }

}
