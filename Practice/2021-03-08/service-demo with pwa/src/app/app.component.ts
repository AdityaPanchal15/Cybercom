import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private route:Router;
  token=localStorage.getItem('token');
  logout(){
    localStorage.removeItem('token');
  }
}
