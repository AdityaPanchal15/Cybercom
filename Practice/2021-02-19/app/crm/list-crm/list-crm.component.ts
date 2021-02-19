import { Component } from '@angular/core';
import { AddCrmComponent } from '../add-crm/add-crm.component';
import { DataService } from '../data.service';
@Component({
  selector: 'app-list-crm',
  templateUrl: './list-crm.component.html',
  styleUrls: ['./list-crm.component.css']
})
export class ListCrmComponent {
  crmList:[];  
  constructor(){
      let service = new DataService();
      let data = service.getCrmList();
      
    }
    
}
