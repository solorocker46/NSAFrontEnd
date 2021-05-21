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

  dateString:string = '';
  student:Student=new Student();
  sub:Subscription=new Subscription();

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router) 
  { }

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

  updateStudent(stu:Student)
  {
    this.studentService.updateStudent(this.student).subscribe(data =>
      {
        this.student=stu;
        if(stu.birthDate != null)
        {
          this.dateString = stu.birthDate.toString();
        }
        if(stu.userId !== undefined)
          this.editDate(stu.userId);
        console.log("date "+this.dateString);
        //console.log(stu.birthDate);
        alert("Updated Successfully");
        this.router.navigateByUrl(`studentDashboard/${this.student.userId}/viewStudentByUserId`);
      },
      error =>
      {
        console.log("Error Occurred", error);
      }
      );
  }

  editDate(userId:string)
  {
    this.studentService.updateDate(userId, this.dateString).subscribe(
      data=>
      {
        console.log("date "+this.dateString);
        console.log("Date edited!");
        // if(this.stu.birthDate != null)
        // {
        //   this.dateString = this.stu.birthDate.toString();
        // }
        // console.log("date "+this.dateString);
        // alert("Student Added");
        //this.router.navigateByUrl(`student/login/addStudent/editInstitutionDetails/${this.stu.studentId}`);
        //this.router.navigateByUrl(`studentDashboard/viewStudentByUserId/${this.stu.userId}`);
      },
      err=>
      {
        console.log("Error Occurred",err.error);
      }
    );
  }

  }

  // editStudent(student:Student)
  // {
  //   this.editstudent=true;
  //   this.stu=student;
  //   console.log(this.stu.userId+' '+this.stu.studentId+' '+this.stu.fullName);
  // }

  // updateStudent(student:Student)
  // {
  //   this.editstudent=true;
  //   this.studentService.updateStudent(this.stu).subscribe(
  //     data=>
  //     {
  //       this.stu=student;
  //       console.log(this.stu.userId+' '+this.stu.studentId+' '+this.stu.fullName)
  //       this.editstudent=false;
  //     },
  //     error=>
  //     {
  //       console.log("error occurred ",error);
  //     }
  //   )
  // }

