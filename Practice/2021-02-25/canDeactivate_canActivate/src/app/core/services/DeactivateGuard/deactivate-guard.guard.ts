import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


export interface GuardComponent{
  Deactivate:()=>boolean;
}



@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardGuard implements CanDeactivate<GuardComponent> {
  canDeactivate(component: GuardComponent){
    return component.Deactivate();
    
  }
  
}
