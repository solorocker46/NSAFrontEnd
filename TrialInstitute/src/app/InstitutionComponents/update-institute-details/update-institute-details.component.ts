import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Institution } from 'src/app/modules/institution';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-update-institute-details',
  templateUrl: './update-institute-details.component.html',
  styleUrls: ['./update-institute-details.component.css']
})
export class UpdateInstituteDetailsComponent implements OnInit {

  //editemployee:boolean=false;
  institute:Institution = new Institution();
  sub:Subscription = new Subscription();
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  userid:string = this.route.snapshot.url[1].path;

  constructor(private institutionService:InstituteService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
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
        const userId = params['userId'];
        if(userId) {
          this.institutionService.getByUserId(userId).subscribe((data:any) =>
          {
            if(data) {
              this.institute = data;
            }
            else
            {
              console.log(`Institution with ${userId} not found`);
            }
          }
          );
        }
      }
      );
  }

  dashboard():void
  {
    console.log(this.userid);
    this.router.navigateByUrl(`institutedashboard/${this.userid}`);
  }

  updateInstitution(institution:Institution)
  {
    //this.editemployee=true;   
      this.institutionService.updateInstitution(this.institute).subscribe(
      data=>
      {
          this.institute = institution;
          //console.log(this.institute.userId +' '+ this.institute.name +" "+this.institute.code);
          alert("Updated successfully");
          this.router.navigateByUrl(`institutedashboard/${institution.userId}/viewbyid`);
          //this.editemployee=false;
      },
      err=>
      {
        alert(err.error);
        console.log("error errored ",err.error);       
      }
    )
  }

}
