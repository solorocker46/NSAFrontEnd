import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Officer } from 'src/app/modules/officer';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-view-officer',
  templateUrl: './view-officer.component.html',
  styleUrls: ['./view-officer.component.css']
})
export class ViewOfficerComponent implements OnInit {
  searchText:string = '';
  officers:Officer[]=[];

  sub:Subscription = new Subscription();
  constructor(private officerService:OfficerService,private router:Router,private route:ActivatedRoute) { }

  //editofficer:boolean=false;
 
  officer1:Officer= new Officer();

  ngOnInit(): void {
    this.officerService.getAllOfficers().subscribe(data=>
      {
        this.officers=data;
      },
      error=>
      {
        console.log("error occured ",error);
      }
      );

      this.sub = this.route.params.subscribe(params =>
        {
          const userId = params['userId'];
          if(userId) {
            this.officerService.getOfficerByUserId(userId).subscribe((data:any) =>
            {
              if(data) {
                this.officer1 = data;
              }
              else
              {
                console.log(`Officer with ${userId} not found`);
              }
            }
            );
          }
        }
        );
  }

  // editOfficer(officer2:Officer)
  // {
  //   this.editofficer = true;
  //   this.officer1=officer2;
  //   console.log(this.officer1.userId + ' ' +this.officer1.name);
  // }

  // updateOfficer(officer2:Officer)
  // {
  //   this.editofficer=true;
   
  //   this.officerService.updateOfficer(this.officer1).subscribe(
  //     data=>
  //     {
        
  //         this.officer1=officer2;
  //         console.log(this.officer1.userId +' '+ this.officer1.name +" "+this.officer1.state );
  //         this.editofficer=false;
         
 
  //     },
  //     error=>
  //     {
  //       console.log("error errored ",error);
        
  //     }
  //   )
 
  // }
}
