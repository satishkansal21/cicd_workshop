import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { User } from './models/user';
import { Auth } from 'aws-amplify';
import { map } from 'rxjs/operators';

interface CognitoUser {
  attributes: unknown,
  id: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  auth = Auth;

  getCurrentUser(): Observable<any>{
    console.log(this.auth);
    return from(Auth.currentUserInfo()).pipe(map((user: CognitoUser) => new User(user.username)));
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


