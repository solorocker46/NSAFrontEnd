import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-by-student-id',
  templateUrl: './view-by-student-id.component.html',
  styleUrls: ['./view-by-student-id.component.css']
})
export class ViewByStudentIdComponent implements OnInit {

  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router) 
  { }

  student:Student=new Student();
  sub:Subscription=new Subscription();

  ngOnInit(): void 
  {
    let link = document.getElementById('jumbotron');
    if(link != null)
    {
      link.style.display = "none";
    }
    let link1 = document.getElementById('marquee');
    if(link1 != null)
    {
      link1.style.display = "none";
    }
    this.sub=this.route.params.subscribe(params =>
      {
        const studentId=params['studentId'];
        if(studentId)
        {
          this.studentService.getByStudentId(studentId).subscribe((data:any) =>
          {
            if(data)
            {
              this.student=data;
            }
            else
            {
              console.log(`Student with ${studentId} not found`);
            }
          }
          );
        }
      }
      );
  }

}
