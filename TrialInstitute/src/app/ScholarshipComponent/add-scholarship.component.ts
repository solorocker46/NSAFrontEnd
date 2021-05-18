import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipService } from '../services/scholarship.service';
import { Scholarship } from '../modules/scholarship';

@Component({
  selector: 'app-add-scholarship',
  templateUrl: './add-scholarship.component.html',
  styleUrls: ['./add-scholarship.component.css']
})
export class AddScholarshipComponent implements OnInit {

  scholarship:Scholarship = new Scholarship();
  constructor(private scholarshipService:ScholarshipService,private router:Router) { }

  ngOnInit(): void {
  }

  addScholarship()
  {
    this.scholarshipService.addScholarship(this.scholarship).subscribe(data =>
      {
        alert("Scholarship added");
        this.router.navigateByUrl("view");
      },
      error =>
      {
        console.log("Error occurred", error);
      }
      );
  }

}


