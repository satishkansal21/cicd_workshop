import { Component } from '@angular/core';
import { CognitoAuthUser, UserService } from './user.service';
import { Auth } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'name-that-cat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly auth = Auth;
  readonly authUser$: Observable<CognitoAuthUser> = from(Auth.currentUserInfo()).pipe(
    tap((user: CognitoAuthUser) => this.userService.setCurrentUser(user.username))
  );
  constructor(
    private readonly userService: UserService
  ) {
  }
}
