import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student:Student=new Student();
  sub:Subscription=new Subscription();
  userid:string = this.route.snapshot.url[1].path;
  
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  aadharPattern = "^[2-9]{1}[0-9]{11}$";
  bankIfscPattern = "^[A-Z]{4}0[A-Z0-9]{6}$"; 

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router) 
  { }

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

    this.sub=this.route.params.subscribe(params=>
      {
        const userId=params['userId'];
        if(userId) 
        {
          this.studentService.getByUserId(userId).subscribe((data:any) =>
          {
            if(data) 
            {
              this.student=data;
            }
            else
            {
              console.log(`Student with ${userId} not found`);
            }
          }
          );
        }
      }
      );
  }

  studentDashboard():void
  {
    this.router.navigateByUrl(`studentDashboard/${this.userid}`);
  }

  updateStudent(stu:Student)
  {
    this.studentService.updateStudent(this.student).subscribe(data =>
      {
        this.student=stu;
        alert("Updated Successfully");
        this.router.navigateByUrl(`studentDashboard/${this.student.userId}/viewStudentByUserId`);
      },
      err=>
      {
        alert(err.error);
        console.log("Error Occurred",err.error);
      }
      );
  }
}