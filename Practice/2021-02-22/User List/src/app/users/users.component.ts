import { Component, OnInit } from '@angular/core';
import { UserListService } from '../core/services/users/user-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  _title = 'mintop';
  _userArray = [];

  constructor(private userService:UserListService) { }

  ngOnInit(): void {
    try {
      this.userService.getUsers().subscribe((response) => {
        if(response){
          this._userArray = response["data"];
        }
      })
    } catch (error) {
      throw new Error(error);
    }
    
  }

}
