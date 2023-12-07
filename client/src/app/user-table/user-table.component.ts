import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'ng-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  user: User[] = [];
  constructor(private userService: UserService) {};

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): User[] {
    return this.user;
  }
}
