import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  // _registeredItem:Object;
  @Input() _data;
  _food;
  _choosedFoods=" ";

  constructor() { }

  ngOnInit(): void {
      this._food=Object.entries(this.cruisSpecifics.foodRequest);
     
      this._food.forEach(element => {
        if(element[1]){
          this._choosedFoods+=element[0]+" ";
        }  
      });
  }

  get cruisSpecifics(){ return this._data.cruisSpecifics; }
  get contactInformation(){return this._data.contactInformation; }

}
