import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DateConvert } from 'src/app/modules/date-convert';
import { Student } from 'src/app/modules/student';
import { StudentService } from 'src/app/services/student.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-view-by-user-id',
  templateUrl: './view-by-user-id.component.html',
  styleUrls: ['./view-by-user-id.component.css']
})
export class ViewByUserIdComponent implements OnInit {

  constructor(private studentService:StudentService, private route:ActivatedRoute,private router:Router, private datepipe:DatePipe) 
  { }

  student:Student=new Student();
  sub:Subscription = new Subscription();
  userid:string = this.route.snapshot.url[1].path;
  dateString:Date = new Date();
  dateconvert:DateConvert = new DateConvert();

  ngOnInit(): void 
  {
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
    // this.sub=this.route.params.subscribe(params=>
    //   {
    //     const userId=params['userId'];
        console.log(this.userid);
        // if(userId) 
        // {
          this.studentService.getDate(this.userid).subscribe((data:any) =>
          {
            if(data) 
            {
              console.log(this.userid);

              this.dateconvert=data;
              console.log(this.dateString);

            }
            else
            {
              console.log(this.dateString);
              //console.log(`Student with ${userId} not found`);
            }
          },
          err=>
          {
            //alert(err.toString());
            console.log("Error = ",err.error);
            console.log(this.dateString);
          }
          );
        //}
      // }
      // );
    this.sub=this.route.params.subscribe(params=>
      {
        const userId=params['userId'];
        if(userId) 
        {
          this.studentService.getByUserId(this.userid).subscribe((data:any) =>
          {
            if(data) 
            {
              this.student=data;
              //this.getDate(this.userid);
              // console.log(this.dateString);
              console.log(this.dateconvert.date);
              //let latest_date =this. datepipe. transform(this.dateconvert.date, 'yyyy-MM-dd');
             
              if(this.dateconvert.date !== undefined)
              {
                this.dateString = new Date(this.dateconvert.date);
                let bdate = this.datepipe.transform(this.dateString, 'dd-MMM-yyyy');
                if(bdate)
                  this.student.birthDate = bdate;
              }
              
            }
            else
            {
              console.log(`Student with ${userId} not found`);
            }
          },
          err=>
          {
            console.log("Error = ",err.error);
            
          }
          );
        }
      }
      );
  }

  // getDate(userId:string)
  // {
      
  //     this.sub=this.route.params.subscribe(params=>
  //     {
  //       const userId=params['userId'];
  //       if(userId) 
  //       {
  //         this.studentService.getDate(this.userid).subscribe((data:string) =>
  //         {
  //           if(data) 
  //           {
  //             this.dateString=data.toString();
  //             console.log(this.dateString);
  //           }
  //           else
  //           {
  //             console.log(this.dateString);
  //             console.log(`Student with ${userId} not found`);
  //           }
  //         },
  //         err=>
  //         {
  //           console.log("Error = ",err.error);
  //         }
  //         );
  //       }
  //     }
  //     );
  // }

}
