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

  ngOnInit(): void {
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

}
