import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RegisterModel } from '../register/register.model';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  regUrl="https://reqres.in/api/register";
  loginUrl="https://reqres.in/api/login";
  userList="https://reqres.in/api/users?page=2";
  
  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http:HttpClient) { }
  // getAll(page){
  //   return this.http.get(this.regUrl+page)
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }
  getUser(){
    return this.http.get(this.userList)
    .pipe(
      catchError(this.handleError)
    )
  }
  registerUser(resource){
    return this.http.post<any>(this.regUrl,resource,this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }
  loginUser(resource){
    return this.http.post<RegisterModel>(this.regUrl,resource,this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
 
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}
