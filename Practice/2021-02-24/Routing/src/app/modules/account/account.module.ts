import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { MyAccountComponent } from './my-account/my-account.component';


@NgModule({
  declarations: [AccountComponent, MyAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
