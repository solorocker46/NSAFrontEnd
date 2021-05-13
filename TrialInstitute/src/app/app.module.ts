import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInstituteComponent } from './InstitutionComponents/add-institute/add-institute.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddMinistryComponent } from './MinistryComponent/add-ministry/add-ministry.component';
import { AddOfficerComponent } from './OfficerComponent/add-officer/add-officer.component';
import { AddStudentComponent } from './StudentComponent/add-student/add-student.component';
import { AddScholarshipComponent } from './ScholarshipComponent/add-scholarship/add-scholarship.component';
import { LoginComponent } from './UserComponent/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    AddInstituteComponent,
    AddMinistryComponent,
    AddOfficerComponent,
    AddStudentComponent,
    AddScholarshipComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
