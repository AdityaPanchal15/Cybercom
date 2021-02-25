import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UrlAuthenticationGuard implements CanActivate {
  constructor(private _router: Router,private _service:LoginService) { }

  canActivate() {
    if(this._service.getUser()){
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }

}
