import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-password-student',
  templateUrl: './password-student.component.html',
  styleUrls: ['./password-student.component.css']
})
export class PasswordStudentComponent implements OnInit {

  sub:Subscription = new Subscription();
  userId:string = '';
  password:string = '';
  confirmPassword:string = '';

  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void 
  {
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

  updateStudentPassword(userId:string, password:string)
  {
    this.studentService.updateStudentPassword(this.userId, this.password).subscribe(data =>
      {
        this.userId=userId;
        this.password=password;
        alert("Updated password successfully");
        this.router.navigateByUrl(`student/login`);
      },
      err =>
      {
        alert(err.error);
        console.log("error errored ",err.error);       
      }
      )
  }


}
