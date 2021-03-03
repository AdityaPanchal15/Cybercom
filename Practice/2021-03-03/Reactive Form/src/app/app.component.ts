import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  // _data:any;

  constructor(){}

  // setItem(item){
  //   item._newItemEvent.subscribe((data)=>{
  //     this._data=data;
  //     this._router.navigate(['/registrationDetails']);
  //   });
  // }
}
