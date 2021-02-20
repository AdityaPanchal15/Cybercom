import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-crm',
  templateUrl: './list-crm.component.html',
  styleUrls: ['./list-crm.component.css']
})
export class ListCrmComponent {
  crmList:any[];  
  constructor(service:DataService){
    this.crmList=service.getCrmList();
    console.log(this.crmList);
    
  }
  
  // ngOnInit(){
  //   // let data=this.service.getCrmList();
    
      
      
  //  }
    
    
}
