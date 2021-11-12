import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';
import { UserVotes } from './models/user-votes';

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


