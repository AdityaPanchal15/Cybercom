import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _userExist=this._service.getUser();

  constructor(private _service:LoginService) { }

  ngOnInit(): void {
  }
  submitUser(email){
    this._service.setUser(email.value);
  }
  logout(){
    localStorage.removeItem('user');
  }

}
