import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path:'policyList',
    component:PolicyListComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
