import { Component, OnInit } from '@angular/core';
import { UserListService } from './core/services/users/user-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _title = 'User List';
  _userArray = [];

  constructor() { }

  ngOnInit(): void { }

}

