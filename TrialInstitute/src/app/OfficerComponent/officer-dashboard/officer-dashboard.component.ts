import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-officer-dashboard',
  templateUrl: './officer-dashboard.component.html',
  styleUrls: ['./officer-dashboard.component.css']
})

export class OfficerDashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute, private officerService:OfficerService) { 

  }
 
  sub:Subscription = new Subscription();
  userId:string = this.route.snapshot.url[1].path;
  name:string = '';

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
    this.sub = this.route.params.subscribe(params =>
      {
        const code = params['userId'];
        if(code) {
          this.officerService.getOfficerByUserId(this.userId).subscribe((data:any) =>
          {
            if(data) {
              
              if(data.name !== undefined)
              {
                this.name = data.name;
              }
              
            }
            else
            {
              console.log(`Officer with ${this.userId} not found`);
            }
          }
          );
        }
      }
    );
  }

}
