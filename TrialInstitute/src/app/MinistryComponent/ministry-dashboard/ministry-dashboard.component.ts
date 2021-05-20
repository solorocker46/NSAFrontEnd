import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministry-dashboard',
  templateUrl: './ministry-dashboard.component.html',
  styleUrls: ['./ministry-dashboard.component.css']
})
export class MinistryDashboardComponent implements OnInit {

  constructor() { }

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
  }

}
