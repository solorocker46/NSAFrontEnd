import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewByIdComponent } from './InstitutionComponents/view-by-id/view-by-id.component'
import { AddInstituteComponent } from './InstitutionComponents/add-institute/add-institute.component';
import { DashboardComponent } from './InstitutionComponents/dashboard/dashboard.component';
import { DetailedInstituteDetailsComponent } from './InstitutionComponents/detailed-institute-details/detailed-institute-details.component';
import { ViewAllComponent } from './InstitutionComponents/view-all/view-all.component';
import { ViewStudentComponent } from './StudentComponent/view-student/view-student.component';
import { AddStudentComponent } from './StudentComponent/add-student/add-student.component';
import { UpdateInstituteDetailsComponent } from './InstitutionComponents/update-institute-details/update-institute-details.component';
import { LoginComponent } from './UserComponent/login.component';
import { OfficerDashboardComponent } from './OfficerComponent/officer-dashboard/officer-dashboard.component';
import { AddOfficerComponent } from './OfficerComponent/add-officer/add-officer.component';
import { ViewOfficerComponent } from './OfficerComponent/view-officer/view-officer.component';
import { GrantApprovalComponent } from './OfficerComponent/grant-approval/grant-approval.component';
import { UpdateOfficerComponent } from './OfficerComponent/update-officer/update-officer.component';
import { UpdateStatusComponent } from './OfficerComponent/update-status/update-status.component';
import { ViewStudentNewComponent } from './OfficerComponent/view-student-new/view-student-new.component';
import { ViewScholarshipComponent } from './ScholarshipComponent/view-scholarship/view-scholarship.component';
import { AddScholarshipComponent } from './ScholarshipComponent/add-scholarship/add-scholarship.component';

const routes: Routes = [
  {path:'viewStudent',component:ViewStudentComponent},
  {path:'student/login/addStudent',component:AddStudentComponent},

  {path: 'officerdashboard/:userId', component:OfficerDashboardComponent},
  {path: 'officer/login/addOfficer', component:AddOfficerComponent},
  {path: 'officerdashboard/:userId/view', component:ViewOfficerComponent},
  {path:'officerdashboard/:userId/grantApproval',component:GrantApprovalComponent},
  {path:'officerdashboard/:userId/updateOfficer',component:UpdateOfficerComponent},
  {path:'officerdashboard/:userId/updateStatus',component:UpdateStatusComponent},
  {path: 'officerdashboard/:userId/viewStudentNew/:student', component:ViewStudentNewComponent},
  
  // {path:'institutedashboard/:userId/add', component:AddInstituteComponent},
  {path:'institution/login/addInstitute', component:AddInstituteComponent},
  {path:'institutedashboard/:userId', component:DashboardComponent},
  {path:'institutedashboard/:userId/viewall', component:ViewAllComponent},
  {path:'institutedashboard/:userId/viewall/institute/:code', component:DetailedInstituteDetailsComponent},
  {path:'officerdashboard/:userId/updateStatus/institute/:code', component:DetailedInstituteDetailsComponent},
  {path:'institutedashboard/:userId/viewbyid', component:ViewByIdComponent},
  {path:'institutedashboard/:userId/updateinstitute', component:UpdateInstituteDetailsComponent},
  {path:'institution/login', component:LoginComponent},
  {path:'student/login', component:LoginComponent},
  {path:'officer/login', component:LoginComponent},

  {path:'addScholarship', component:AddScholarshipComponent},
  {path:'viewScholarship', component:ViewScholarshipComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
