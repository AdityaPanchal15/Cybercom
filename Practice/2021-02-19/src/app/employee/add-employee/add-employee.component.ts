import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  {
  employeeName=new FormControl('');
  constructor(private service:EmployeeService){
  }

  addAlert(){
    this.service.setEmployee(this.employeeName.value);
    alert(this.employeeName.value);
  }
}
