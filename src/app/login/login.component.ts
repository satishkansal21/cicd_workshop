import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'name-that-cat-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly userService: UserService
  ) { }

  logIn(userName: string) {
    this.userService.setCurrentUser(userName);
  }
}
