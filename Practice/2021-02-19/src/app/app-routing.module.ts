import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'employee',
   loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'crm',
   loadChildren: () => import('./crm/crm.module').then(m => m.CrmModule) },
  { path: 'company', 
  loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
