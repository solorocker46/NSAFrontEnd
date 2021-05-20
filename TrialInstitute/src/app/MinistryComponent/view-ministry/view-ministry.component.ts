import { Component, OnInit } from '@angular/core';
import { Ministry } from 'src/app/modules/ministry';
import { MinistryService } from 'src/app/services/ministry.service';

@Component({
  selector: 'app-view-ministry',
  templateUrl: './view-ministry.component.html',
  styleUrls: ['./view-ministry.component.css']
})
export class ViewMinistryComponent implements OnInit {

  constructor(private ministryService:MinistryService) {

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

}
