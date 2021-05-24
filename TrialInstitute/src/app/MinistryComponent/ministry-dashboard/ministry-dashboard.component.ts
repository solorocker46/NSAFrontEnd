import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ministry } from 'src/app/modules/ministry';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-ministry-dashboard',
  templateUrl: './ministry-dashboard.component.html',
  styleUrls: ['./ministry-dashboard.component.css']
})
export class MinistryDashboardComponent implements OnInit {

  userId:string = this.route.snapshot.url[1].path;
  minister:Ministry=new Ministry();
  constructor(private ministryService:MinistryService,private route:ActivatedRoute) { }

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
    this.ministryService.getMinistryById(this.userId).subscribe(data=>
      {this.minister=data;},
      error=>{
        console.log("error occured");})
    
  }

  

}
