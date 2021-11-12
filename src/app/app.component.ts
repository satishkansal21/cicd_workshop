import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'name-that-cat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$ = this.userService.getCurrentUser();

  constructor(private readonly userService: UserService) {
  }
}
