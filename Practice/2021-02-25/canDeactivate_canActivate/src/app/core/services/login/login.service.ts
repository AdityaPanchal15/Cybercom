import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setUser(email){
    localStorage.setItem('user',email);
  }
  getUser(){
    return !!localStorage.getItem('user');
  }
}
