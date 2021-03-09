import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { LoginModel } from './login.model';
import { decode } from 'querystring';
// import { AuthGuardService } from '../service/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData:any[];
  mode=new LoginModel();
  constructor(private service:PostService) { }

  ngOnInit(): void {}
  
  
  createLogin(){

    const Reg=Object.assign({},this.mode);
   
    this.service.loginUser(Reg)
    .subscribe(
      (data)=>{
        console.log(data); 
        localStorage.setItem('token',data['token']);  
        alert('Login Successfull');
      },
      (error:any)=>console.log(error)
      
    )
    }
}
