import {Component} from '@angular/core';


@Component({
    selector:'bindComponent',
    template:`
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save</button>
        </div>
        <input (keyup.enter)="onKeyUp()"/><br>
        <input #email1 (keyup.enter)="onKeyEnter(email1.value)"/><br>
        
        <input [value]="email" (keyup.enter)="email=$event.target.value; onKey()"/><br>
        <input [(ngModel)]="email" (keyup.enter)="onKey()"/>
    `
})
export class BindingComponent{
    //event binding
    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked",$event);  
    }
    onDivClicked(){
        console.log("Div was clicked");
    }

    //For event filtering using .enter
    onKeyUp(){                              
         console.log("Enter was pressed");
    }

    //template variables 
    onKeyEnter(email1){
        console.log(email1);
    }

    //two-way binding
    email="me@gmail.com";
    
    onKey(){
        console.log(this.email);
    }


}