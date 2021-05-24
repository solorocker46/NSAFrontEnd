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
  student:Student=new Student();
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
  }

  addStudent()
  {
    this.studentService.addNewStudent(this.student).subscribe(
      data=>
      {
        if(this.student.birthDate != null)
        {
          this.dateString = this.student.birthDate.toString();
        }
        if(this.student.userId !== undefined)
          this.editDate(this.student.userId);
        alert("Student Added");
        this.router.navigateByUrl(`student/login/addStudent/editInstitutionDetails/${this.student.studentId}`);
      },
      err=>
      {
        alert(err.error);
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
      },
      err=>
      {
        alert(err.error);
        console.log("Error Occurred",err.error);
      }
    );
  }

}
