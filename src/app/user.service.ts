import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

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


