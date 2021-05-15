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
