import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DateConvert } from 'src/app/modules/date-convert';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-by-student-id',
  templateUrl: './view-by-student-id.component.html',
  styleUrls: ['./view-by-student-id.component.css']
})
export class ViewByStudentIdComponent implements OnInit {

  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router, private datepipe:DatePipe) 
  { }

  student:Student=new Student();
  sub:Subscription=new Subscription();
  dateString:Date = new Date();
  dateconvert:DateConvert = new DateConvert();
  studentid:string = this.route.snapshot.url[1].path;
  userid:string = this.route.snapshot.url[1].path;
  
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


    this.studentService.getDate(this.studentid).subscribe((data:any) =>
    {
      if(data)
      {
        this.dateconvert=data;
      }
      else
      {
        console.log(this.dateString);
      }
    },
    err =>
    {
      console.log("Error = ",err.error);
    }
    );

    this.sub=this.route.params.subscribe(params =>
      {
        const studentId=params['studentId'];
        if(studentId)
        {
          this.studentService.getByStudentId(studentId).subscribe((data:any) =>
          {
            if(data)
            {
              this.student=data;
              if(this.dateconvert.date!==undefined)
              {
                this.dateString=new Date(this.dateconvert.date);
                let bdate=this.datepipe.transform(this.dateString,'dd-MMM-yyyy');
                if(bdate)
                   this.student.birthDate=bdate;
              }
            }
            else
            {
              console.log(`Student with ${studentId} not found`);
            }
          },
          err =>
          {
            console.log("Error = ",err.error);    
          }
          );
        }
      }
      );
  }

  studentDashboard():void
  {
    this.router.navigateByUrl(`studentDashboard/${this.userid}`);
  }

}
