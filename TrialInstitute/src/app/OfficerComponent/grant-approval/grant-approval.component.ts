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

  grantApproval(student:Student){
    this.officerService.grantApproval(student).subscribe(data=>
      {
        this.students=this.students.filter(s=>s!==student);
        
        //this.check(student)
        //alert("check Student");
        
        //this.router.navigate(["ministry-dashboard/view-student",JSON.stringify(student)]);
      },
      error=>{
        console.log("Error occurred ",error);
      }
      )
  }

  check(student:Student){
    //this.student=student;
    //this.grantScholarship(this.student);
    alert("check student");
    this.router.navigate(["officerdashboard/:userId/viewStudentNew",JSON.stringify(student)]);

  }




  /*changeColor(student:Student){
    if(student.appStatus=="Approved"){
      return{'background-color':'green'};
    }
    else if(student.appStatus=="Rejected"){
      return{'background-color':'red'};
    }

    else if(student.appStatus=="pending" && student.approval=="pending"){
      return{'background-color':'yellow'};

    }

    else{
      return{'background-color':'white'};
    }
  }*/


}
