import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scholarship } from 'src/app/modules/scholarship';
import { ScholarshipService } from 'src/app/services/scholarship.service';

@Component({
  selector: 'app-view-scholarship',
  templateUrl: './view-scholarship.component.html',
  styleUrls: ['./view-scholarship.component.css']
})

export class ViewScholarshipComponent implements OnInit {
  scholarship:Scholarship[]=[];
  constructor(private scholarshipService:ScholarshipService,private router:Router) { 
  }

  ngOnInit(): void {
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
}
