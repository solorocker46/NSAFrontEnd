import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ministry } from 'src/app/modules/ministry';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-add-ministry',
  templateUrl: './add-ministry.component.html',
  styleUrls: ['./add-ministry.component.css']
})
export class AddMinistryComponent implements OnInit {

  ministry:Ministry=new Ministry();

  constructor(private ministryservice:MinistryService,private router:Router)  { 

  }
  createNewMinistry(){
    this.ministryservice.createNewMinistry(this.ministry).subscribe(
      data=>{
        alert('ministry added');
        this.router.navigateByUrl("ministry/login");
      },
      error=>
      {
        console.log("error occured",error);
      }
    )

  }

  ngOnInit(): void {
  }

}
