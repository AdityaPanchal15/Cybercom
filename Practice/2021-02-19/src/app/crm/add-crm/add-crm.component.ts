import { Component, OnInit } from '@angular/core';
import { CrmModule } from '../crm.module';
import { DataService } from '../data.service';
import { FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
 
@Component({
  selector: 'app-add-crm',
  templateUrl: './add-crm.component.html',
  styleUrls: ['./add-crm.component.css']
})
export class AddCrmComponent  {
  name=new FormControl('');
  constructor(private service:DataService){
    
  }
  
  addAlert(){
    this.service.setCrm(this.name.value); 
    alert(this.name.value);
  }

  

}
