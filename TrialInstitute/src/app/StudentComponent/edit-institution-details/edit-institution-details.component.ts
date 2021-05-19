import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/modules/student';
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

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router) { }

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
  }

  updateInstitutionDetails(insName:String)
  {
    this.studentService.editInstitutionDetails(this.student,this.institutionName).subscribe( data =>
      {
        this.institutionName=insName;
        alert("Institution Details Added Successfully");
        this.router.navigateByUrl(`student/login`);
        //this.router.navigateByUrl(`student/login/addStudent/editInstitutionDetails/applyScholarship/${this.student.studentId}`);
        //this.router.navigateByUrl(`studentDashboard/viewStudentByUserId/${this.student.userId}`)
      
      },
      error =>
      {
        console.log("Error Occurred",error);
      })
  }

}
