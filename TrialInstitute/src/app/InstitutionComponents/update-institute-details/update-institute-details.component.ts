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

  constructor(private institutionService:InstituteService, private route:ActivatedRoute, private router:Router) { }

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

  // editEmployee(employee:Employee)
  // {
  //   this.editemployee=true;
  //   this.emp=employee;
  //   console.log(this.emp.id+' '+this.emp.name);  
  // }

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
      error=>
      {
        console.log("error errored ",error);       
      }
    )
  }

}
