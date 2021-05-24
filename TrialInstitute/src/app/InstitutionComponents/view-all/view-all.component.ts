import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Institution } from 'src/app/modules/institution';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private instituteService:InstituteService, private router:Router, private route:ActivatedRoute) { }

  searchText:string = '';
  institutes:Institution[] = [];
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

    this.instituteService.viewAllInstitutes().subscribe(data =>
      {
        this.institutes = data;
      }, 
      error =>
      {
        console.log("Errors = "+error);
      } 
      );
      
  }

  dashboard():void
  {
    console.log(this.userid);
    this.router.navigateByUrl(`institutedashboard/${this.userid}`);
  }
}
