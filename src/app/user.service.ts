import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Auth from '@aws-amplify/auth';
import { User } from './models/user';
import { UserVotes } from './models/user-votes';
import { Hub } from 'aws-amplify';

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

  getCurrentUser(): Observable<User | undefined>{
    return this.currentUser.asObservable();
  }

  setCurrentUser(userName: string) {
    const user = new User(userName);

    this.currentUser.next(user);
  }

  clearCurrentUser() {
    this.currentUser.next(undefined);
  }

  updateUserVotes(catId: string) {
    const current = this.currentUser.value;

    if(current) {
      const currentCatVote = current.userVotes?.find((userVote) => userVote.catId === catId);
      const notCurrentCatVotes = current.userVotes?.filter((userVote) => userVote.catId !== catId);

      const updatedCurrentCatVote = currentCatVote ? 
        {
          ...currentCatVote,
          votes: currentCatVote.votes + 1
        } :
        new UserVotes(current.userName, catId, 1);
      
      const updatedCatVotes = [
          ...notCurrentCatVotes,
          updatedCurrentCatVote
        ];

      this.currentUser.next({
        ...current,
        userVotes: [...updatedCatVotes]
      });
    }
  }
}


