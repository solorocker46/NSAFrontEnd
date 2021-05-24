import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Officer } from 'src/app/modules/officer';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-update-officer',
  templateUrl: './update-officer.component.html',
  styleUrls: ['./update-officer.component.css']
})

export class UpdateOfficerComponent implements OnInit {

  officer1:Officer = new Officer();
  sub:Subscription = new Subscription();
  userid:string = this.route.snapshot.url[1].path;

  constructor(private officerService:OfficerService,private route:ActivatedRoute,private router:Router) { 
  }

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

  updateOfficer(officer2:Officer)
  {  
    this.officerService.updateOfficer(this.officer1).subscribe(
      data=>
      {        
        this.officer1=officer2;        
        alert("Updated Officer succesfully");
        this.router.navigateByUrl(`officerdashboard/${this.officer1.userId}/view`);
 
      },
      error=>
      {
        console.log("error occured ",error);
        
      }
    )
 
  }

  stateList: Array<any> = [
    { name: 'Andhra Pradesh'},
    { name: 'Arunachal Pradesh' },
    { name: 'Assam' },
    { name: 'Bihar'},
    { name: 'Chhattisgarh' },
    { name: 'Goa'},
    { name: 'Gujarat' },
    { name: 'Haryana' },
    { name: 'Himachal Pradesh'},
    { name: 'Jharkhand' },
    { name: 'Karnataka'},
    { name: 'Kerala' },
    { name: 'Madhya Pradesh' },
    { name: 'Maharashtra'},
    { name: 'Manipur' },
    { name: 'Meghalaya'},
    { name: 'Mizoram' },
    { name: 'Nagaland' },
    { name: 'Odisha'},
    { name: 'Punjab' },
    { name: 'Rajasthan' },
    { name: 'Sikkim' },
    { name: 'Tamil Nadu'},
    { name: 'Telangana' },
    { name: 'Tripura'},
    { name: 'Uttar Pradesh' },
    { name: 'Uttarakhand' },
    { name: 'West Bengal'},
    { name: 'Andaman and Nicobar Islands' },
    { name: 'Chandigarh' },
    { name: 'Dadra and Nagar Haveli'},
    { name: 'Daman and Diu' },
    { name: 'Delhi'},
    { name: '	Lakshadweep' },
    { name: 'Pondicherry' },
  ];

  dashboard(){
   
    this.router.navigateByUrl(`officerdashboard/${this.userid}`);
  }
}

