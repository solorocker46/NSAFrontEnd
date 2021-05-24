import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Officer } from 'src/app/modules/officer';
import { OfficerService } from 'src/app/services/officer.service';

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.css']
})

export class AddOfficerComponent implements OnInit {

  officer:Officer=new Officer();
  userid:string = this.route.snapshot.url[1].path;

  constructor(private officerService:OfficerService,private router:Router,private route:ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  createOfficer(){
    this.officerService.createNewOfficer(this.officer).subscribe(
      data=>{
        alert("Officer Added")
        this.router.navigateByUrl("officerdashboard/:userid/view");
      },

      err=>{
        alert("Officer with this userId exists")
        console.log("error occured ",err.error);
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
