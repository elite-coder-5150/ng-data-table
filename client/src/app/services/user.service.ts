import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  user: User = {
    id: 0,
    f_name: '',
    m_name: '',
    l_name: '',
    role: '',
    password: '',
    email: '',
    team: '',
    hire_date: new Date,
  }
  private apiUrl = 'http://localhost:3000/api/users';
  constructor() { }

  generateUserId(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  getUsers(): Observable<User> {
    return  new Observable<User>((observer) => {
      axios.get(this.apiUrl)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        }).catch((error) => {
          observer.error(error);
        });
    });
  }

  getUserById(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;

    return new Observable<User>((observer) => {
      axios.get<User>(url)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        }).catch((error) => {
          observer.error(error);
        });
    });
  }

  addUser(user: User):Observable<User> {
    const url = `${this.apiUrl}/users/${user.id}`;

    return new Observable((observer) => {
      axios.post<User>(url, user)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        }).catch((error) => {
          observer.error(error);
        });
    })
  }
  
  updiateUser(user: User):Observable<User> {
    const url = `${this.apiUrl}/users/${user.id}`;

    return new Observable((observer) => {
      axios.put<User>(url, user)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        }).catch((error) => {
          observer.error(error);
        });
    })
  }

  deleteUser(user: User):Observable<User> {
    const url = `${this.apiUrl}/users/${user.id}`;

    return new Observable((observer) => {
      axios.delete(url)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        }).catch((error) => {
          observer.error(error);
        });
    })
  }
}
// this 