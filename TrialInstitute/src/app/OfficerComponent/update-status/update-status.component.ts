import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { error } from 'selenium-webdriver';
import { Institution } from 'src/app/modules/institution';
import { Officer } from 'src/app/modules/officer';
import { InstituteService } from 'src/app/services/institute.service';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})

export class UpdateStatusComponent implements OnInit {

  constructor(private officerService:OfficerService,private instituteService:InstituteService,private router:Router, private route:ActivatedRoute) {
  }

  sub:Subscription = new Subscription();
  institutes:Institution[] = [];
  userId:string = this.route.snapshot.url[1].path;
  state:string = '';

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
          this.officerService.getOfficerByUserId(this.userId).subscribe((data:Officer) =>
          {
            if(data) {
              
              if(data.state !== undefined)
              {
                this.state = data.state;
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

    this.instituteService.viewAllInstitutes().subscribe(data =>
      {
        this.institutes = data;
        this.institutes = this.institutes.filter(inst=>inst.state==this.state);
      }, 
      error =>
      {
        console.log("Errors = "+error);
      } 
      );
      
  }

  updateStatus(code:number, status:string, userId:string)
  {
      this.officerService.updateStatus(code, status).subscribe(
      data=>
      {
         
          alert(`${status} institution`);
          this.router.navigateByUrl(`officerdashboard/${userId}/updateStatus/institute/${code}`);
 
      },
      error=>
      {
        console.log("Error occurred ",error);
      }
      
 
      );
    }

    getColorNew(status:string):string{
    
      if(status=="Pending"){
        return 'yellow';
      }
      
      else if(status=="Approved"){
        return 'lime';
      }
      
      else{
        return 'tomato';
      }
  
    }

    dashboard(){
      
       this.router.navigateByUrl(`officerdashboard/${this.userId}`);
     }
}
