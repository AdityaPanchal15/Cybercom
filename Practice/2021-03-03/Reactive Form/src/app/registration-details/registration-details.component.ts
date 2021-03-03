import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../core/services/form-data.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  // @Input() _data;
  _data:any;
  _food:any;
  _choosedFoods=" ";

  constructor(private _service:FormDataService) { }

  ngOnInit(): void {
    this._data=this.formData;
      this._food=Object.entries(this.cruisSpecifics.foodRequest);
     
      this._food.forEach(element => {
        if(element[1]){
          this._choosedFoods+=element[0]+" ";
        }  
      });
  }

  get formData(){
    if(this._service.formData){
      return this._service.formData;
    }
    return null; 
  }

  get cruisSpecifics(){ return this._data.cruisSpecifics; }
  get contactInformation(){return this._data.contactInformation; }

}
