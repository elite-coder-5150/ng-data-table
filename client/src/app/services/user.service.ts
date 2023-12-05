import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  generateUserId(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
// this 