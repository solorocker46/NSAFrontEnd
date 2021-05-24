import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ministry } from 'src/app/modules/ministry';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-add-ministry',
  templateUrl: './add-ministry.component.html',
  styleUrls: ['./add-ministry.component.css']
})
export class AddMinistryComponent implements OnInit {

  ministry:Ministry=new Ministry();
  sub:Subscription=new Subscription();
  userid:string = this.route.snapshot.url[1].path;

  constructor(private ministryservice:MinistryService,private router:Router,private route:ActivatedRoute)  { 

  }
  createNewMinistry(){
    this.ministryservice.createNewMinistry(this.ministry).subscribe(
      data=>{
        alert('ministry added');
        this.router.navigateByUrl(`ministry-dashboard/${this.userid}/view-ministry`);
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
