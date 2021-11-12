import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CatService } from '../cat.service';
import { Cat } from '../models/cat';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'name-that-cat-display',
  templateUrl: './cat-display.component.html',
  styleUrls: ['./cat-display.component.scss']
})
export class CatDisplayComponent implements OnInit {
  readonly currentCat$: Observable<Cat> = this.catService.getCurrentCat();
  readonly user$: Observable<User | undefined> = this.userService.getCurrentUser();

  constructor(
    private readonly userService: UserService,
    private readonly catService: CatService
  ) {}

  ngOnInit() {
    this.catService.getAnotherCat().pipe(
      take(1)
    ).subscribe();
  }

  castVote(currentCat: Cat, name: string) {
    const updatedNames = currentCat.names.map((nameWithVote) => {
      if(nameWithVote.name === name) {
        return {
          ...nameWithVote,
          votes: nameWithVote.votes + 1
        }
      }
      return nameWithVote
    });

    const updatedCat: Cat = {
      ...currentCat,
      names: [
        ...updatedNames,
      ]
    };

    this.userService.updateUserVotes(updatedCat.id);
    this.catService.updateCurrentCat(updatedCat);
  }
}
