import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstituteComponent } from './InstitutionComponents/add-institute/add-institute.component';
import { AddStudentComponent } from './StudentComponent/add-student/add-student.component';
import { ViewStudentComponent } from './StudentComponent/view-student/view-student.component';

const routes: Routes = [
  {path:'add', component:AddInstituteComponent},
  {path:'viewStudent',component:ViewStudentComponent},
  {path:'addStudent',component:AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
