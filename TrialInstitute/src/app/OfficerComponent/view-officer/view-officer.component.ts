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
  userid:string = this.route.snapshot.url[1].path;
  sub:Subscription = new Subscription();

  constructor(private officerService:OfficerService,private router:Router,private route:ActivatedRoute) { }

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

  dashboard(){
    this.router.navigateByUrl(`officerdashboard/${this.userid}`);
  }
  
}
