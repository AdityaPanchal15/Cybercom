import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CrmComponent } from './crm.component';
import { AddCrmComponent } from './add-crm/add-crm.component';
import { ListCrmComponent } from './list-crm/list-crm.component';


@NgModule({
  declarations: [CrmComponent, AddCrmComponent, ListCrmComponent],
  imports: [
    CommonModule,
    CrmRoutingModule
  ]
})
export class CrmModule { }
