import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-by-institution-name',
  templateUrl: './view-by-institution-name.component.html',
  styleUrls: ['./view-by-institution-name.component.css']
})
export class ViewByInstitutionNameComponent implements OnInit {

  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router) 
  { }

  students:Student[]=[];
  sub:Subscription=new Subscription();
  userid:string = this.route.snapshot.url[1].path;

  ngOnInit(): void {
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
        const institutionName=params['institutionName'];
        if(institutionName)
        {
          this.studentService.getByInstitutionName(institutionName).subscribe((data:any) =>
          {
            if(data)
            {
              this.students=data;
            }
            else
            {
              console.log(`No Students found`);
            }
          }
          );
        } 
      }
      );
  }

  dashboard():void
  {
    console.log(this.userid);
    this.router.navigateByUrl(`institutedashboard/${this.userid}`);
  }

}
