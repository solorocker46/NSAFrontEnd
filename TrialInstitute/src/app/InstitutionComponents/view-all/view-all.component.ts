import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { Institution } from 'src/app/modules/institution';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  constructor(private instituteService:InstituteService) { }

  searchText:string = '';
  institutes:Institution[] = [];

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
}
