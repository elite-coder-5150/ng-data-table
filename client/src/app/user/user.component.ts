import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'ng-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  min: number = 1;
  max: number = 1000000;

  constructor(private userService: UserService) {}

  generateId() {
    const userId = this.userService.generateUserId(this.min, this.max);
    return userId;
  }


}
