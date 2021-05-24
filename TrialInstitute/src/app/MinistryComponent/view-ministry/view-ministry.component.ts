import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ministry } from 'src/app/modules/ministry';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-view-ministry',
  templateUrl: './view-ministry.component.html',
  styleUrls: ['./view-ministry.component.css']
})
export class ViewMinistryComponent implements OnInit {

  userid:string = this.route.snapshot.url[1].path;

  constructor(private ministryService:MinistryService,private router:Router,private route:ActivatedRoute) {

  }

  ministries:Ministry[]=[];


 ngOnInit(): void {
  
     this.ministryService.getMinistry().subscribe(
       data=>
       {
         this.ministries=data;
       },
       error=>
      {
       console.log("Error occurred ",error);
      }
     );
       
 
 }

 dashboard(){
  this.router.navigateByUrl(`ministry-dashboard/${this.userid}`);
}

}
