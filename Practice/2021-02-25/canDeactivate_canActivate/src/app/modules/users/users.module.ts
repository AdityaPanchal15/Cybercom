import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { DeactivateGuardGuard } from 'src/app/core/services/DeactivateGuard/deactivate-guard.guard';


@NgModule({
  declarations: [UsersComponent, ListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  // providers:[DeactivateGuardGuard]
})
export class UsersModule { }
