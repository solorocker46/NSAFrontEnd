import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstituteComponent } from './InstitutionComponents/add-institute/add-institute.component';

const routes: Routes = [
  {path:'add', component:AddInstituteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
