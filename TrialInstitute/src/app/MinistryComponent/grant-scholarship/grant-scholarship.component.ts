import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/modules/student';
import { MinistryService } from 'src/app/services/ministry.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-grant-scholarship',
  templateUrl: './grant-scholarship.component.html',
  styleUrls: ['./grant-scholarship.component.css']
})
export class GrantScholarshipComponent implements OnInit {
  //studentService: any;

  students:Student[]=[];
  student:Student=new Student();

  constructor(private ministryService:MinistryService,private studentService:StudentService,private router:Router) { }

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
    this.router.navigate(["ministry-dashboard/:userId/check-student",JSON.stringify(student)]);

  }
  //appStatus:String=new String();
  
  getColor(appStatus:string,approval:string):string{
    //console.log("appStatus= "+appStatus);
    if(approval=="pending"){
      return 'yellow';
    }
    if(appStatus=="pending"){
      return 'white';
    }
    else if(appStatus=="Approved"){
      return 'green';
    }
    
    else{
      return 'red';
    }


  }

  dashboard(){
    alert("go to dashboard");
    this.router.navigate(["ministry-dashboard/:userId"]);
  }






}
