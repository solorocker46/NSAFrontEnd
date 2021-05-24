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
import { LogoutComponent } from './UserComponent/logout/logout.component';
import { EditInstitutionDetailsComponent } from './StudentComponent/edit-institution-details/edit-institution-details.component';
import { ApplyScholarshipComponent } from './StudentComponent/apply-scholarship/apply-scholarship.component';
import { DashboardStudentComponent } from './StudentComponent/dashboard-student/dashboard-student.component';
import { ViewByUserIdComponent } from './StudentComponent/view-by-user-id/view-by-user-id.component';
import { UpdateStudentComponent } from './StudentComponent/update-student/update-student.component';
import { ViewByStudentIdComponent } from './StudentComponent/view-by-student-id/view-by-student-id.component';
import { ViewByInstitutionNameComponent } from './StudentComponent/view-by-institution-name/view-by-institution-name.component';
import { MinistryDashboardComponent } from './MinistryComponent/ministry-dashboard/ministry-dashboard.component';
import { CheckStudentComponent } from './MinistryComponent/check-student/check-student.component';
import { AddMinistryComponent } from './MinistryComponent/add-ministry/add-ministry.component';
import { GrantScholarshipComponent } from './MinistryComponent/grant-scholarship/grant-scholarship.component';
import { ViewMinistryComponent } from './MinistryComponent/view-ministry/view-ministry.component';
import { AppComponent } from './app.component';
import { PasswordComponent } from './InstitutionComponents/password/password.component';
import { PasswordStudentComponent } from './StudentComponent/password-student/password-student.component';

const routes: Routes = [
  // { path: '', component:AppComponent },
  {path:'student/login', component:LoginComponent},
  {path:'student/login/changeStudentPassword',component:PasswordStudentComponent},
  {path:'student/login/addStudent',component:AddStudentComponent},
  {path:'student/login/addStudent/editInstitutionDetails/:studentId',component:EditInstitutionDetailsComponent},
  {path:'studentDashboard/:userId',component:DashboardStudentComponent},
  {path:'studentDashboard/:userId/viewScholarship',component:ViewScholarshipComponent},
  {path:'studentDashboard/:userId/applyScholarship',component:ApplyScholarshipComponent},
  {path:'studentDashboard/:userId/applyScholarship/viewScholarship',component:ViewScholarshipComponent},
  {path:'studentDashboard/:userId/viewStudentByUserId',component:ViewByUserIdComponent},
  {path:'studentDashboard/:userId/viewStudent',component:ViewStudentComponent},
  {path:'studentDashboard/:userId/updateStudent',component:UpdateStudentComponent},
  {path:'studentDashboard/:userId/viewStudent/viewStudentByStudentId/:studentId',component:ViewByStudentIdComponent},
  {path:'studentDashboard/:userId/viewStudentByInstitutionName/:institutionName',component:ViewByInstitutionNameComponent},
  {path:'studentDashboard/:userId/logout', component:LogoutComponent},

  {path:'officer/login', component:LoginComponent},
  {path: 'officerdashboard/:userId', component:OfficerDashboardComponent},
  {path: 'officer/login/addOfficer', component:AddOfficerComponent},
  {path: 'officerdashboard/:userId/view', component:ViewOfficerComponent},
  {path:'officerdashboard/:userId/grantApproval',component:GrantApprovalComponent},
  {path:'officerdashboard/:userId/updateOfficer',component:UpdateOfficerComponent},
  {path:'officerdashboard/:userId/updateStatus',component:UpdateStatusComponent},
  {path: 'officerdashboard/:userId/viewStudentNew/:student', component:ViewStudentNewComponent},
  {path:'officerdashboard/:userId/updateStatus/institute/:code',component:DetailedInstituteDetailsComponent},
  {path: 'officerdashboard/:userId/addOfficer', component:AddOfficerComponent},
  {path:'officerdashboard/:userId/logout', component:LogoutComponent},

  {path:"ministry-dashboard/:userId",component:MinistryDashboardComponent},
  {path:"ministry-dashboard/:userId/check-student/:student",component:CheckStudentComponent},
  {path:'ministry-dashboard/:userId/addScholarship', component:AddScholarshipComponent},
  {path:'ministry-dashboard/:userId/viewScholarship', component:ViewScholarshipComponent},
  {path:'ministry/login', component:LoginComponent},
  {path:'ministry/login/add-ministry', component:AddMinistryComponent},
  {path:'ministry-dashboard/:userId/grant-scholarship',component:GrantScholarshipComponent},
  {path:'ministry-dashboard/:userId/view-ministry',component:ViewMinistryComponent},

  // {path:'institutedashboard/:userId/add', component:AddInstituteComponent},
  {path:'institution/login/addInstitute', component:AddInstituteComponent},
  {path:'institutedashboard/:userId', component:DashboardComponent},
  {path:'institutedashboard/:userId/viewall', component:ViewAllComponent},
  {path:'institutedashboard/:userId/viewall/institute/:code', component:DetailedInstituteDetailsComponent},
  {path:'institutedashboard/:userId/viewbyid', component:ViewByIdComponent},
  {path:'institutedashboard/:userId/updateinstitute', component:UpdateInstituteDetailsComponent},
  {path:'institutedashboard/:userId/logout', component:LogoutComponent},
  {path:'institution/login', component:LoginComponent},
  {path:'institution/login/changePassword', component:PasswordComponent},
  {path:'institutedashboard/:userId/viewStudents/:institutionName',component:ViewByInstitutionNameComponent},
  {path:'institutedashboard/:userId/viewScholarship',component:ViewScholarshipComponent},
  
  {path:'addScholarship', component:AddScholarshipComponent},
  {path:'viewScholarship', component:ViewScholarshipComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
