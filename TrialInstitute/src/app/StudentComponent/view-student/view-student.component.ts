import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit 
{
  constructor(private studentService:StudentService) 
  { }

  students:Student[]=[];

  ngOnInit(): void 
  {
    this.studentService.getStudent().subscribe(data=>
      {
        this.students=data;
      },
      error=>
      {
        console.log("Error occured ",error);
      }
      );
  }

}
