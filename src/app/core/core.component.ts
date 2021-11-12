import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'name-that-cat-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  user$ = this.userService.getCurrentUser();

  constructor(private readonly userService: UserService) {
  }
}
