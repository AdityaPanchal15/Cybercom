import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:'login',
    component:LoginComponent,
    // canActivate:[AuthGuardService]
  },
  {
    path:'users',
    component:UsersComponent,
    canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
