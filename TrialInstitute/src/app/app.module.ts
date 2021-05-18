import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
 import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInstituteComponent } from './InstitutionComponents/add-institute/add-institute.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './InstitutionComponents/dashboard/dashboard.component';
import { ViewAllComponent } from './InstitutionComponents/view-all/view-all.component';
import { DetailedInstituteDetailsComponent } from './InstitutionComponents/detailed-institute-details/detailed-institute-details.component';
import {FilterPipe} from './InstitutionComponents/view-all/filter.pipe';
import { ViewByIdComponent } from './AngularComponents/view-by-id/view-by-id.component';
import { AddStudentComponent } from './StudentComponent/add-student/add-student.component';
import { ViewStudentComponent } from './StudentComponent/view-student/view-student.component';
import { UpdateInstituteDetailsComponent } from './InstitutionComponents/update-institute-details/update-institute-details.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './UserComponent/login.component';
import { AddOfficerComponent } from './OfficerComponent/add-officer/add-officer.component';
import { ViewOfficerComponent } from './OfficerComponent/view-officer/view-officer.component';
import { GrantApprovalComponent } from './OfficerComponent/grant-approval/grant-approval.component';
import { OfficerDashboardComponent } from './OfficerComponent/officer-dashboard/officer-dashboard.component';
import { UpdateOfficerComponent } from './OfficerComponent/update-officer/update-officer.component';
import { UpdateStatusComponent } from './OfficerComponent/update-status/update-status.component';
import { AddScholarshipComponent } from './ScholarshipComponent/add-scholarship/add-scholarship.component';
import { ViewScholarshipComponent } from './ScholarshipComponent/view-scholarship/view-scholarship.component';


@NgModule({
  declarations: [
    AppComponent,
    AddInstituteComponent,
    DashboardComponent,
    ViewAllComponent,
    DetailedInstituteDetailsComponent,
    FilterPipe,
    ViewByIdComponent,
    AddInstituteComponent,
    ViewStudentComponent,
    AddStudentComponent,
    UpdateInstituteDetailsComponent,
    LoginComponent,
    AddOfficerComponent,
    ViewOfficerComponent,
    GrantApprovalComponent,
    OfficerDashboardComponent,
    UpdateOfficerComponent,
    UpdateStatusComponent,
    AddScholarshipComponent,
    ViewScholarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
