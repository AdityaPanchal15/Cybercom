import { Component } from '@angular/core';


export class DataService{
    crmList=[];
    getCrmList(){
        return this.crmList;
    }
    setCrm(name){
        this.crmList.push(name);
        console.log(this.crmList);
    }
}