import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Institution } from 'src/app/modules/institution';
import { Student } from 'src/app/modules/student';
import { InstituteService } from 'src/app/services/institute.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-institution-details',
  templateUrl: './edit-institution-details.component.html',
  styleUrls: ['./edit-institution-details.component.css']
})
export class EditInstitutionDetailsComponent implements OnInit 
{
  student:Student=new Student();
  sub:Subscription=new Subscription();
  institutionName!: String;
  institutes:Institution[] |undefined;

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router, private instituteService:InstituteService) { }

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
        const studentId=params['studentId'];
        if(studentId)
        {
          this.studentService.getByStudentId(studentId).subscribe((data:any) =>
          {
            if(data)
            {
              this.student=data;
            }
            else
            {
              console.log(`Student with ${studentId} not found`);
            }
          }
          );
        }
      }
      );
      
      //to show dropdown menu of institution names
      this.instituteService.viewAllInstitutes().subscribe(data =>
        {
          this.institutes=data;
          console.log(this.institutes);
        },
        err=>
        {
          alert(err.error);
          console.log("Error Occurred",err.error);
        }
        );
  }

  updateInstitutionDetails(insName:String)
  {
    this.studentService.editInstitutionDetails(this.student,this.institutionName).subscribe( data =>
      {
        this.institutionName=insName;
        alert("Institution Details Added Successfully");
        this.router.navigateByUrl(`student/login`);
      },
      err=>
        {
          alert(err.error);
          console.log("Error Occurred",err.error);
        }
      )
  }

}
