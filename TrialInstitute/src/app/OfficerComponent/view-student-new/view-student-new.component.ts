import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/modules/student';
import { OfficerService } from 'src/app/services/officer.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-student-new',
  templateUrl: './view-student-new.component.html',
  styleUrls: ['./view-student-new.component.css']
})

export class ViewStudentNewComponent implements OnInit {

  student:Student;
  students:Student[]=[];
  constructor(private studentService:StudentService,private officerService:OfficerService,private route:ActivatedRoute, private router:Router) {
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
  
  grantApproval(student:Student){
    this.officerService.grantApproval(student).subscribe(data=>
      {
        this.students=this.students.filter(s=>s!==student);
      }, 
      err=>{
        alert("error "+ err.error);
        console.log("Error occurred ",err.error);
      }
    )
  }
  refresh(std:Student){
    this.grantApproval(std);
    this.getAllStudents();
    alert("student is checked");   
    this.router.navigate(["officerdashboard/:userId/grantApproval"]);

  }
}
