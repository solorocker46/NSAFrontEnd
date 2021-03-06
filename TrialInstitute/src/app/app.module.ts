import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
 import {CommonModule, DatePipe} from '@angular/common';
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
import { LogoutComponent } from './UserComponent/logout/logout.component';
import { UpdateStudentComponent } from './StudentComponent/update-student/update-student.component';
import { DashboardStudentComponent } from './StudentComponent/dashboard-student/dashboard-student.component';
import { ViewByStudentIdComponent } from './StudentComponent/view-by-student-id/view-by-student-id.component';
import { ViewByInstitutionNameComponent } from './StudentComponent/view-by-institution-name/view-by-institution-name.component';
import { ViewByUserIdComponent } from './StudentComponent/view-by-user-id/view-by-user-id.component';
import { EditInstitutionDetailsComponent } from './StudentComponent/edit-institution-details/edit-institution-details.component';
import { ApplyScholarshipComponent } from './StudentComponent/apply-scholarship/apply-scholarship.component';
import { ViewMinistryComponent } from './MinistryComponent/view-ministry/view-ministry.component';
import { GrantScholarshipComponent } from './MinistryComponent/grant-scholarship/grant-scholarship.component';
import { CheckStudentComponent } from './MinistryComponent/check-student/check-student.component';
import { MinistryDashboardComponent } from './MinistryComponent/ministry-dashboard/ministry-dashboard.component';
import { AddMinistryComponent } from './MinistryComponent/add-ministry/add-ministry.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { PasswordComponent } from './InstitutionComponents/password/password.component';
import { FilterPipeStudent } from './StudentComponent/view-student/filter.pipe';
import { PasswordStudentComponent } from './StudentComponent/password-student/password-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddInstituteComponent,
    DashboardComponent,
    ViewAllComponent,
    DetailedInstituteDetailsComponent,
    FilterPipe,
    FilterPipeStudent,
    AddInstituteComponent,
    UpdateInstituteDetailsComponent,

    ViewStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DashboardStudentComponent,
    ViewByStudentIdComponent,
    ViewByInstitutionNameComponent,
    ViewByUserIdComponent,
    EditInstitutionDetailsComponent,
    ApplyScholarshipComponent,
    
    AddOfficerComponent,
    ViewOfficerComponent,
    GrantApprovalComponent,
    OfficerDashboardComponent,
    UpdateOfficerComponent,
    UpdateStatusComponent,

    AddScholarshipComponent,
    ViewScholarshipComponent,

    ViewMinistryComponent,
    GrantScholarshipComponent,
    MinistryDashboardComponent,
    CheckStudentComponent,
    AddMinistryComponent,

    LoginComponent,
    LogoutComponent,
    CarouselComponent,
    PasswordComponent,
    PasswordStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
