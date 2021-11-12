import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatService } from '../cat.service';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'name-that-cat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly user$: Observable<User | undefined> = this.userService.getCurrentUser();

  constructor(
    private readonly userService: UserService,
    private readonly catService: CatService
  ) { }

  nextCat() {
    this.catService.getAnotherCat().subscribe();
  }

  switchUser() {
    this.userService.clearCurrentUser();
  }

}
