import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListService } from './core/services/users/user-list.service';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { DeactivateGuardGuard } from './core/services/DeactivateGuard/deactivate-guard.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserListService,DeactivateGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
