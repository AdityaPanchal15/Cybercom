import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  employeeList;
  constructor(service:EmployeeService) {
    this.employeeList=service.getEmployeeList();
    console.log(this.employeeList);
   }


}
