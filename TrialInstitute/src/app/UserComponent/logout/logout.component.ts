import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/modules/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  sub:Subscription = new Subscription();
  userId:string = '';
  
  constructor(private userService:UserService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //let link1 = document.getElementById('marquee');
    //this.link = link1;
    // if(link1 != null)
    // {
    //   link1.style.display = "none";
    // }
    this.userId = this.route.snapshot.url[1].path;
    console.log(this.userId);
  }

  logout():void
  {
    this.userService.logout(this.userId).subscribe(
      data=>
      {
        alert("logout successful");
        //this.link.display = "block";
        location.replace("#");
      },
      error=>
      {
        console.log("Error Occured",error);
      }
    )
    
  }
}
