import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  // userid:string = this.route.snapshot.url[1].path;

  constructor(private officerService:OfficerService,private studentService:StudentService,private router:Router, private route:ActivatedRoute) { }

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
   
    this.router.navigate(["officerdashboard/:userId/viewStudentNew",JSON.stringify(student)]);
  }


  getColor(approval:string):string{
    
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

  // dashboard(){
    
  //    this.router.navigateByUrl(`officerdashboard/${this.userid}`);
  //  }
}
