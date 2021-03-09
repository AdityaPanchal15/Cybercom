import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[];

  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.service.getUser()
    .subscribe(
      data=>this.users=data['data'],
      error=>console.log(error)
    )
  }

}
