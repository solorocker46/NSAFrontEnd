import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { error } from 'selenium-webdriver';
import { Institution } from 'src/app/modules/institution';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-detailed-institute-details',
  templateUrl: './detailed-institute-details.component.html',
  styleUrls: ['./detailed-institute-details.component.css']
})
export class DetailedInstituteDetailsComponent implements OnInit {

  constructor(private instituteService:InstituteService, private route:ActivatedRoute, private router:Router) { }

  institution:Institution = new Institution();
  sub:Subscription = new Subscription();

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
        const code = params['code'];
        if(code) {
          this.instituteService.getByCode(code).subscribe((data:any) =>
          {
            if(data) {
              this.institution = data;
            }
            else
            {
              console.log(`Institution with ${code} not found`);
            }
          }
          );
        }
      }
      );
    
  }

}
