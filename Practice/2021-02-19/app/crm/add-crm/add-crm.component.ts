import { Component, OnInit } from '@angular/core';
import { CrmModule } from '../crm.module';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-add-crm',
  templateUrl: './add-crm.component.html',
  styleUrls: ['./add-crm.component.css']
})
export class AddCrmComponent  {
  constructor(){
    let service = new DataService();
    service.setCrm(name); 
  }
  addAlert(name){
    alert(name+'added');
  }

  

}
