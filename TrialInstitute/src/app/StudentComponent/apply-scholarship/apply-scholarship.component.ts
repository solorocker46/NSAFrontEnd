import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-apply-scholarship',
  templateUrl: './apply-scholarship.component.html',
  styleUrls: ['./apply-scholarship.component.css']
})
export class ApplyScholarshipComponent implements OnInit 
{
  sub:Subscription=new Subscription();
  scholarshipId!:number;
  studentId !:number;
  userid:string = this.route.snapshot.url[1].path;

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router) 
  { }

  ngOnInit(): void 
  {
    let link = document.getElementById('jumbotron');
    if(link != null)
    {
      link.style.display = "none";
    }
    let link1 = document.getElementById('marquee');
    if(link1 != null)
    {
      link1.style.display = "none";
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
  }

  applyScholarshipById(scholarId:number)
  {
    this.studentService.applyScholarship(this.studentId,this.scholarshipId).subscribe(data =>
      {
        console.log(this.studentId);
        this.scholarshipId=scholarId;
        alert("Scholarship applied");
        //this.router.navigateByUrl(`student/login`);
        this.router.navigateByUrl(`studentDashboard/${this.userid}/viewStudentByUserId`);
      },
      error =>
      {
        console.log("Error Occured", error);
      }
      )
  }

}
