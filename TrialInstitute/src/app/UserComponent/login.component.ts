import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modules/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  user:User = new User();

  path:String = new String();
  passPath:String = new String();

  ngOnInit(): void {
    if(this.router.url == "/institution/login")
    {
      this.user.role = "Institution";
      this.path = "addInstitute";
      this.passPath = `changePassword`;
    }
    else if(this.router.url == '/student/login')
    {
      this.user.role = "Student";
      this.path = "addStudent";
    }
    else if(this.router.url == '/officer/login')
    {
      this.user.role = "Officer";
      this.path = "addOfficer";
    }
    else if(this.router.url=='/ministry/login'){
      this.user.role = "Ministry";
      this.path = "add-ministry";
    }
    console.log(this.router.url);
  }

  login():void
  {
    this.userService.login(this.user).subscribe(
      data=>
      {
        
        alert("Login successful");
        if(this.user.role == "Institution")
        {
          this.router.navigateByUrl(`institutedashboard/${this.user.userId}`);
        }
        else if(this.user.role == "Student")
        {
          this.router.navigateByUrl(`studentDashboard/${this.user.userId}`);
        }
        else if(this.user.role == "Officer")
        {
          this.router.navigateByUrl(`officerdashboard/${this.user.userId}`);
        }
        else if(this.user.role == "Ministry")
        {
          this.router.navigateByUrl(`ministry-dashboard/${this.user.userId}`);
        }
      },
      err=>
      {
        //alert(err.error);
        let id = document.getElementById("msg");
        if(id !== null)
          id.innerHTML = err.error;
        console.log("Error Occurred",err.error);
      }
    )

  }

  
}
