import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { UsersService } from './users.service';

@Component({
  selector: 'gjk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gjk';
  users;

  private _onDestroy$ = new Subject();

  constructor(private usersService: UsersService) {
    this.getAllUsers = this.getAllUsers.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getAllUsers()
      .subscribe(users => this.users = users);
  }

  addUser(name, age) {
    this.usersService.addUser(name, age)
      .subscribe(this.getAllUsers);
  }
}
