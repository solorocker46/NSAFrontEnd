import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  stu:Student=new Student();

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
        alert("Student Added");
        this.router.navigateByUrl("viewStudent");
      },
      error=>
      {
        console.log("Error Occurred",error);
      }
    )
  }

}
