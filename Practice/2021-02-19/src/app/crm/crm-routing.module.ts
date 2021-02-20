import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm.component';
import { AddCrmComponent } from './add-crm/add-crm.component';
import { ListCrmComponent } from './list-crm/list-crm.component';

const routes: Routes = [
  { path: '', 
  component: CrmComponent,
  children:[
    {path:'add',component:AddCrmComponent},
    {path:'list',component:ListCrmComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
