import { Component } from '@angular/core';


export class EmployeeService{
    employeeList=[];
    getEmployeeList(){
        return this.employeeList;
    }
    setEmployee(name){
        this.employeeList.push(name);
        console.log(this.employeeList);
    }
}