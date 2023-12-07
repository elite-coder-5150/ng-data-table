import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'ng-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  user: User[] = [];
  editingUser: boolean = false;
  currentUser: User = {
    id: 0,
      f_name: '',
      m_name: '',
      l_name: '',
      role: '',
      password: '',
      email: '',
      team: '',
      hire_date: new Date(),
  };
  constructor(private userService: UserService) {};

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): User[] {
    return this.user;
  }

  addUser() {
    const newUser: User = {
      id: 0,
      f_name: 'John',
      m_name: 'Doe',
      l_name: 'Smith',
      role: 'User',
      password: 'password123',
      email: 'john@example.com',
      team: 'Team A',
      hire_date: new Date(),
    };

    this.userService.addUser(newUser)
      .pipe(
        tap(addedUser => {
          console.log('user added successfully', addedUser);
        }),
        catchError(error => {
          console.error('error adding user', error);
          return of(null);
        })
      ).subscribe();
    
  }

  deleteSelected() {
    const selectedUsers = this.userService
  }
  loadUsers() {
    this.userService.getUsers()
      .pipe(
        tap(() => {}), catchError(error => {
          console.error(error);
          return of(null)
        })
      ).subscribe();
  }
  cancelEdit() {}

  saveUser() {
    if (this.editingUser) {
      this.userService.updiateUser(this.currentUser)
        .pipe(
          tap(() => {
            this.cancelEdit();
            this.loadUsers();
          }),
          catchError(error => {
            console.error(error);
            return of(null);
          })
        )
    } else {
      this.currentUser.id = this.userService.generateUserId(1, 1000);

      this.userService.addUser(this.currentUser)
        .pipe(
          tap(() => {
            this.cancelEdit();
            this.loadUsers();
          }), catchError(error => {
            console.error(error);
            return of(null);
          })
        ).subscribe();
    }
  }
}
