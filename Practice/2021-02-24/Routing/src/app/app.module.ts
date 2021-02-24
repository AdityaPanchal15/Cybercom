import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListService } from './core/services/users/user-list.service';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
