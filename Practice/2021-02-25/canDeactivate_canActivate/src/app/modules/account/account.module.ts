import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { DeactivateGuardGuard } from 'src/app/core/services/DeactivateGuard/deactivate-guard.guard';


@NgModule({
  declarations: [AccountComponent, MyAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  providers:[DeactivateGuardGuard]
})
export class AccountModule { }
