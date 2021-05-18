import { NgModule } from '@angular/core';
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
import { AddScholarshipComponent } from './ScholarshipComponent/add-scholarship/add-scholarship.component';
import { ViewScholarshipComponent } from './ScholarshipComponent/view-scholarship/view-scholarship.component';

@NgModule({
  declarations: [
    AppComponent,
    AddScholarshipComponent,
    ViewScholarshipComponent,
    AddInstituteComponent,
    DashboardComponent,
    ViewAllComponent,
    DetailedInstituteDetailsComponent,
    FilterPipe,
    ViewByIdComponent,
    AddInstituteComponent,
    ViewStudentComponent,
    AddStudentComponent
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
