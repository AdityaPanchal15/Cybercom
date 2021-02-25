import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { DeactivateGuardGuard } from 'src/app/core/services/DeactivateGuard/deactivate-guard.guard';

const routes: Routes = [
  {
    path:'my-account',
    component: MyAccountComponent,
    canDeactivate:[DeactivateGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
