import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScholarshipService } from 'src/app/services/scholarship.service';
import { Scholarship } from 'src/app/modules/scholarship';

@Component({
  selector: 'app-add-scholarship',
  templateUrl: './add-scholarship.component.html',
  styleUrls: ['./add-scholarship.component.css']
})
export class AddScholarshipComponent implements OnInit {

  scholarship:Scholarship = new Scholarship();
  userid:string = this.route.snapshot.url[1].path;
  constructor(private scholarshipService:ScholarshipService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  addScholarship()
  {
    this.scholarshipService.addScholarship(this.scholarship).subscribe(data =>
      {
        alert("Scholarship added");
        this.router.navigateByUrl(`ministry-dashboard/${this.userid}/viewScholarship`);
      },
      error =>
      {
        console.log("Error occurred", error);
      }
      );
  }

}


