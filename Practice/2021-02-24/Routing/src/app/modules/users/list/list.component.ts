import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/core/services/users/user-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
