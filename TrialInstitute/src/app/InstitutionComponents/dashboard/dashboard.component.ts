import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InstituteService } from 'src/app/services/institute.service';
//import ApartmentIcon from '@material-ui/icons/Apartment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:ActivatedRoute, private instituteService:InstituteService) { }

  sub:Subscription = new Subscription();
  userId:string = this.route.snapshot.url[1].path;
  name:string = '';

  ngOnInit(): void {
    //console.log(this.userId);
    let link = document.getElementById('carousel');
    if(link != null)
    {
      link.style.display = "none";
    }
    let link1 = document.getElementById('marquee');
    if(link1 != null)
    {
      link1.style.display = "none";
    }
    let link2 = document.getElementById('content-row');
    if(link2 != null)
    {
      link2.style.display = "none";
    }
    let link3 = document.getElementById('footer-row');
    if(link3 != null)
    {
      link3.style.display = "none";
    }
    this.sub = this.route.params.subscribe(params =>
      {
        const code = params['userId'];
        if(code) {
          this.instituteService.getByUserId(this.userId).subscribe((data:any) =>
          {
            if(data) {
              if(data.name !== undefined)
              {
                this.name = data.name;
              }
            }
            else
            {
              console.log(`Institution with ${this.userId} not found`);
            }
          }
          );
        }
      }
    );
  }

}


