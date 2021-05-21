import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit 
{
  stu:Student=new Student();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  aadharPattern = "^[2-9]{1}[0-9]{11}$";   //first digit of aadhar no cannot be 0 or 1. Total length should be 12 digits
  bankIfscPattern = "^[A-Z]{4}0[A-Z0-9]{6}$";  //first 4 digits should be alphabets, 5th character is 0, then alphabet or number. (total 11 digits)
  //passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{4, 20}$"  
  dateString:string = '';

  constructor(private studentService:StudentService, private router:Router)
  { }

  ngOnInit(): void 
  {

  }

  addStudent()
  {
    this.studentService.addNewStudent(this.stu).subscribe(
      data=>
      {
        console.log("date "+this.stu.birthDate);
        if(this.stu.birthDate != null)
        {
          this.dateString = this.stu.birthDate.toString();
        }
        if(this.stu.userId !== undefined)
          this.editDate(this.stu.userId);
        console.log("date "+this.dateString);
        alert("Student Added");
        this.router.navigateByUrl(`student/login/addStudent/editInstitutionDetails/${this.stu.studentId}`);
        //this.router.navigateByUrl(`studentDashboard/viewStudentByUserId/${this.stu.userId}`);
      },
      err=>
      {
        console.log("Error Occurred",err.error);
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
