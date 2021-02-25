import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardComponent } from 'src/app/core/services/DeactivateGuard/deactivate-guard.guard';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit,GuardComponent{

  constructor(private _route:Router) {}
 
  Deactivate(){
    if(confirm('want to change page?')){
      return true;
    }else{
      return false;
    }
  }
  
  myNav(url : HTMLInputElement)
  {
    this._route.navigate([`${url.value}`]);
  }

  ngOnInit(): void {}
  

}
