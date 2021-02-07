import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    
  contactMethod=[
      {id:1,name:'Email'},
      {id:2,name:'name'}
    ];
    log(x){ console.log(x) };     //for print property of ngModel variable

    submit(f){                    //for print property of ngForm
      console.log(f);  
    }
    
}
