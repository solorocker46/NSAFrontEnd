import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { InstituteService } from '../../services/institute.service';
import { Institution } from '../../modules/institution';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {

  institute:Institution = new Institution();
  constructor(private instituteService:InstituteService) { }

  ngOnInit(): void {
  }

  addInstitute()
  {
    this.instituteService.addInstitute(this.institute).subscribe(data =>
      {
        alert("Institution added");
      },
      error =>
      {
        console.log("Error occurred", error);
      }
      );
  }
}
