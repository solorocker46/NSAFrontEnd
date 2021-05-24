import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Scholarship } from 'src/app/modules/scholarship';
import { Student } from 'src/app/modules/student';
import { ScholarshipService } from 'src/app/services/scholarship.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-apply-scholarship',
  templateUrl: './apply-scholarship.component.html',
  styleUrls: ['./apply-scholarship.component.css']
})
export class ApplyScholarshipComponent implements OnInit 
{
  sub:Subscription=new Subscription();
  scholarshipid!:number;
  scholarshipName!:String;
  studentId !:number;
  userid:string = this.route.snapshot.url[1].path;
  scholarships:Scholarship[] | undefined;

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router, private scholarshipService:ScholarshipService) 
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

    this.sub=this.route.params.subscribe(params =>
      {
        const userId=params['userId'];
        if(userId)
        {
          this.studentService.getByUserId(this.userid).subscribe((data:any) =>
          {
            if(data)
            {
              this.studentId=data.studentId;
            }
            else
            {
              console.log(`Student with ${this.studentId} not found`);
            }
          }
          );
        }
      }
      );

      //to show dropdown for scholarship details
      this.scholarshipService.getAllScholarships().subscribe(data =>
        {
          this.scholarships=data;
          console.log(this.scholarships);
        },
        err=>
        {
          alert(err.error);
          console.log("Error Occurred",err.error);
        }
        );
  }

  studentDashboard():void
  {
    this.router.navigateByUrl(`studentDashboard/${this.userid}`);
  }


  applyScholarshipById(scholarId:number)
  {
    let schId: number=Number(scholarId).valueOf();
    this.studentService.applyScholarship(this.studentId,schId).subscribe(data =>
      {
        this.scholarshipid=schId;
        alert("Scholarship applied");
        this.router.navigateByUrl(`studentDashboard/${this.userid}/viewStudentByUserId`);
      },
      err =>
      {
        alert(err.error);
        console.log("Error Occured", err.error);
      }
      )
  }

}
