import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Officer } from 'src/app/modules/officer';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.css']
})
export class AddOfficerComponent implements OnInit {

  officer:Officer=new Officer();

  constructor(private officerService:OfficerService,private router:Router) { }

  ngOnInit(): void {
  }

  createOfficer(){
    this.officerService.createNewOfficer(this.officer).subscribe(
      data=>{
        alert("Officer Added")
        this.router.navigateByUrl("officer/login");
      },

      error=>{
        console.log("error occured ",error);
      }
    )
  }

}
