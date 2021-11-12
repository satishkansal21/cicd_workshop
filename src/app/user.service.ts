import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { User } from './models/user';

export interface CognitoAuthUser {
  attributes: unknown,
  id: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  constructor(
    private applicationRef: ApplicationRef
  ) {
    Auth.currentAuthenticatedUser().then(
      (user: CognitoAuthUser) => this.setCurrentUser(user.username),
      _err => this.currentUser.next(undefined)
    );

    Hub.listen('auth', ({ payload: { event, data } }) => {
      const { username } = data;
      if (event === 'signIn') {
        this.currentUser.next(new User(username));
        // manually trigger change detection on sign in
        this.applicationRef.tick();
      } else {
        this.currentUser.next(undefined);
      }
    });
  }

  getCurrentUser(): Observable<any>{
    return this.currentUser.asObservable();
  }

  setCurrentUser(userName: string) {
    const user = new User(userName);

    this.currentUser.next(user);
  }

  updateUserVotes(catId: string) {
    const current = this.currentUser.value;

    if(current) {
      const updatedUser = {
        ...current,
        votes: {
          ...current.votes,
          [catId]: current!.votes[catId] ? current!.votes[catId] + 1 : 1
        }
      }

      this.currentUser.next(updatedUser);
    }
  }
}


