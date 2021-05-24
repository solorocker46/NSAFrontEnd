import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Institution } from 'src/app/modules/institution';
import { InstituteService } from 'src/app/services/institute.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  sub:Subscription = new Subscription();
  userId:string = '';
  password:string = '';
  confirmPassword:string = '';

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
  }

  updateInstitution(userId:string, password:string)
  {
    //this.editemployee=true;   
      this.institutionService.updatePassword(this.userId, this.password).subscribe(
      data=>
      {
          this.userId = userId;
          this.password = password;
          //console.log(this.institute.userId +' '+ this.institute.name +" "+this.institute.code);
          alert("Updated password successfully");
          this.router.navigateByUrl(`institution/login`);
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
