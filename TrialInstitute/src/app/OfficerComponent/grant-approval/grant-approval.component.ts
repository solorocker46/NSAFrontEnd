import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/modules/student';
import { OfficerService } from 'src/app/services/officer.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-grant-approval',
  templateUrl: './grant-approval.component.html',
  styleUrls: ['./grant-approval.component.css']
})

export class GrantApprovalComponent implements OnInit {
  students:Student[]=[];
  student:Student=new Student();
  constructor(private officerService:OfficerService,private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(data=>
      {
        this.students=data;
      },
      error=>{
        console.log("Error occurred ",error);
      }
      );
  }

  check(student:Student){
    alert("check student");
    this.router.navigate(["officerdashboard/:userId/viewStudentNew",JSON.stringify(student)]);
  }


  getColor(appStatus:string,approval:string):string{
    
    if(approval=="Pending"){
      return 'yellow';
    }
    
    else if(approval=="Approved"){
      return 'lime';
    }
    
    else{
      return 'tomato';
    }

  }
}
