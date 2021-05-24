import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scholarship } from 'src/app/modules/scholarship';
import { ScholarshipService } from 'src/app/services/scholarship.service';

@Component({
  selector: 'app-view-scholarship',
  templateUrl: './view-scholarship.component.html',
  styleUrls: ['./view-scholarship.component.css']
})

export class ViewScholarshipComponent implements OnInit {

  scholarship:Scholarship[]=[];
  userid:string = this.route.snapshot.url[1].path;

  constructor(private scholarshipService:ScholarshipService,private router:Router, private route:ActivatedRoute) { 
  }

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
    this.scholarshipService.getAllScholarships().subscribe(data =>
      {
        this.scholarship=data;
      },
      error =>
      {
        console.log("error occured ",error);
      }
      );
  }

  dashboard():void
  {
    console.log(this.userid);
    this.router.navigateByUrl(`institutedashboard/${this.userid}`);
  }
}
