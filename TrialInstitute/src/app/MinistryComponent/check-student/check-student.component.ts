import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/modules/student';
import { MinistryService } from 'src/app/services/ministry.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-check-student',
  templateUrl: './check-student.component.html',
  styleUrls: ['./check-student.component.css']
})
export class CheckStudentComponent implements OnInit {

  student:Student;
  students:Student[]=[];

  constructor(private studentService:StudentService,private ministryService:MinistryService,private route:ActivatedRoute, private router:Router) { 
    this.student=JSON.parse(route.snapshot.params["student"]);
  }

  ngOnInit(): void {
  
  }

  getAllStudents(){
    this.studentService.getStudent().subscribe(data=>
      {
        this.students=data;
      },
      error=>{
        console.log("Error occurred ",error);
      }
      );
  }
  
  grantScholarship(student:Student){
    this.ministryService.grantScholarship(student).subscribe(data=>
      {
        this.students=this.students.filter(s=>s!==student);
      }, 
      error=>{
        console.log("Error occurred ",error);
      }
      )
  }

  refresh(std:Student){
    this.grantScholarship(std);
    //this.getAllStudents();
    alert("student is checked");
    this.router.navigate(["ministry-dashboard/:userId/grant-scholarship"]);
  }


}
