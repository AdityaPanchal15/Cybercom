import { Component, OnInit} from '@angular/core';
import { PostService } from '../service/post.service';
import { RegisterModel } from './register.model';
import decode from 'jwt-decode';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  posts:any[];
  error:string;
  data:any[];
  constructor(private service: PostService) {
  }
  mode=new RegisterModel;
  
  ngOnInit() {}

  createRegister(){
  
    this.mode.email="eve.holt@reqres.in";
    this.mode.password="pistol";
    const Reg=Object.assign({},this.mode);
    console.log(Reg);
    
    this.service.registerUser(Reg)
    .subscribe(
      (data)=>{
        console.log(data);   
        alert('Registration Successfull');
      },
      (error:any)=>console.log(error) 
    )
   
 }
}
