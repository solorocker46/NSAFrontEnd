import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit 
{
  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router) 
  { }

  searchText:string = '';
  students:Student[]=[];
  userid:string = this.route.snapshot.url[1].path;

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

    this.studentService.getStudent().subscribe(data=>
      {
        this.students=data;
      },
      err=>
      {
        alert(err.error);
        console.log("Error Occurred",err.error);
      }
    );
  }

  studentDashboard():void
  {
    this.router.navigateByUrl(`studentDashboard/${this.userid}`);
  }

}


