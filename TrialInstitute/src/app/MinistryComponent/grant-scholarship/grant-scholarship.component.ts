import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  sub:Subscription=new Subscription();
  userid:string = this.route.snapshot.url[1].path;

  constructor(private ministryService:MinistryService,private studentService:StudentService,private router:Router,private route:ActivatedRoute) { }

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
    this.router.navigate([`ministry-dashboard/${this.userid}/check-student`,JSON.stringify(student)]);
  }
  //appStatus:String=new String();

  getColor(appStatus:string,approval:string):string{
    //console.log("appStatus= "+appStatus);
    if(approval=="pending" || approval=="Pending" ){
      return 'rgb(237, 223, 100)';
    }
    if(appStatus=="pending" || appStatus=="Pending" ){
      return 'pink';
    }
    else if(appStatus=="Approved"){
      return 'rgb(125, 219, 150)';
    }
    
    else{
      return 'red';
    }


  }

  dashboard(){
    this.router.navigateByUrl(`ministry-dashboard/${this.userid}`);
  }






}
