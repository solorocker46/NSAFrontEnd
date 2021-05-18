import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewByIdComponent } from './InstitutionComponents/view-by-id/view-by-id.component'
import { AddInstituteComponent } from './InstitutionComponents/add-institute/add-institute.component';
import { DashboardComponent } from './InstitutionComponents/dashboard/dashboard.component';
import { DetailedInstituteDetailsComponent } from './InstitutionComponents/detailed-institute-details/detailed-institute-details.component';
import { ViewAllComponent } from './InstitutionComponents/view-all/view-all.component';
import { ViewStudentComponent } from './StudentComponent/view-student/view-student.component';
import { AddStudentComponent } from './StudentComponent/add-student/add-student.component';

const routes: Routes = [
  {path:'viewStudent',component:ViewStudentComponent},
  {path:'addStudent',component:AddStudentComponent},
  {path:'institutedashboard/add', component:AddInstituteComponent},
  {path: 'institutedashboard', component:DashboardComponent},
  {path:'institutedashboard/viewall', component:ViewAllComponent},
  {path:'institutedashboard/viewall/institute/:code', component:DetailedInstituteDetailsComponent},
  {path:'institutedashboard/viewbyid/:userId', component:ViewByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
