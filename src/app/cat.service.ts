import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Cat } from './models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private readonly currentCat: ReplaySubject<Cat> = new ReplaySubject<Cat>(1);
  private readonly allCats: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>(CATS);
  constructor() { }

  getCurrentCat(): Observable<Cat> {
    return this.currentCat.asObservable();
  }

  updateCurrentCat(currentCat: Cat) {
    const allCatsArray = this.allCats.value;

    const updatedAllCats = allCatsArray.map((cat) => {
      if (cat.id === currentCat.id) {
        return {
          ...currentCat
        }
      }
      return {...cat}
    });

    this.allCats.next(updatedAllCats);
    this.currentCat.next(currentCat);
  }

  getAnotherCat(): Observable<Cat> {
    return this.allCats.pipe(
      map((allCats) => {
        const total = allCats.length;

        const randomIndex = this.getRandomIntInclusive(1, total) - 1;

        return allCats[randomIndex];
      }),
      tap((cat) => this.currentCat.next(cat))
    )
  };

  private getRandomIntInclusive(min: number, max: number): number {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil); //The maximum is inclusive and the minimum is inclusive
  }
}

const CATS: Cat[] = [
  {
    id: 1,
    photoUrl: 'assets/cat_photos/1.png',
    names: [
      {name: 'Cashew', votes: 3},
      {name: 'HoneyBunches', votes: 1},
      {name: 'Saoirse', votes: 0}
    ],
    votingEnds: (Date.now() - (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 2,
    photoUrl: 'assets/cat_photos/2.png',
    names: [
      {name: 'Cleo', votes: 2},
      {name: 'Spritz', votes: 4},
      {name: 'Naoise', votes: 1}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 3,
    photoUrl: 'assets/cat_photos/3.png',
    names: [
      {name: 'Desmond', votes: 6},
      {name: 'Shimegi', votes: 0}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 4,
    photoUrl: 'assets/cat_photos/4.png',
    names: [
      {name: 'Hades', votes: 13},
      {name: 'Rosie', votes: 6},
      {name: 'Skeeter', votes: 1}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 5,
    photoUrl: 'assets/cat_photos/5.png',
    names: [
      {name: 'Cookie', votes: 0},
      {name: 'Trouble', votes: 1},
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 6,
    photoUrl: 'assets/cat_photos/6.png',
    names: [
      {name: 'Sassy', votes: 6},
      {name: 'Min Kei', votes: 1},
      {name: 'Fastest Cat Alive', votes: 4}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 7,
    photoUrl: 'assets/cat_photos/7.png',
    names: [
      {name: 'Duster', votes: 9},
      {name: 'Toulouse', votes: 0}
    ],
    votingEnds: (Date.now() - (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 8,
    photoUrl: 'assets/cat_photos/8.png',
    names: [
      {name: 'Ryoko', votes: 3},
      {name: 'HoneyBear', votes: 3},
      {name: 'Moo Moo', votes: 10}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 9,
    photoUrl: 'assets/cat_photos/9.png',
    names: [
      {name: 'Squishy', votes: 5},
      {name: 'Cortina', votes: 12},
      {name: 'Little My', votes: 0}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 10,
    photoUrl: 'assets/cat_photos/10.png',
    names: [
      {name: 'Tooticky', votes: 3},
      {name: 'Angel', votes: 1},
      {name: 'Torino', votes: 0}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 11,
    photoUrl: 'assets/cat_photos/11.png',
    names: [
      {name: 'Snufkin', votes: 0},
      {name: 'Potato', votes: 1},
      {name: 'Mr Silly', votes: 0}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 12,
    photoUrl: 'assets/cat_photos/12.png',
    names: [
      {name: 'CatMan', votes: 3},
      {name: 'Cazador', votes: 0},
      {name: 'GingerBread', votes: 0}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 13,
    photoUrl: 'assets/cat_photos/13.png',
    names: [
      {name: 'Tiger', votes: 3},
      {name: 'Milton', votes: 1},
      {name: 'Aang', votes: 0}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 14,
    photoUrl: 'assets/cat_photos/14.png',
    names: [
      {name: 'Stinker', votes: 5},
      {name: 'MuShu', votes: 6},
      {name: 'Mr. Shorts', votes: 1}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 15,
    photoUrl: 'assets/cat_photos/15.png',
    names: [
      {name: 'Hecate', votes: 3},
      {name: 'Tangerine', votes: 0},
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 16,
    photoUrl: 'assets/cat_photos/16.png',
    names: [
      {name: 'Bunnymuffins', votes: 1},
      {name: 'Flounder', votes: 0}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 17,
    photoUrl: 'assets/cat_photos/17.png',
    names: [
      {name: 'Fly Boy', votes: 2},
      {name: 'CatMan', votes: 0},
      {name: 'Stuart', votes: 5}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 18,
    photoUrl: 'assets/cat_photos/18.png',
    names: [
      {name: 'Korra', votes: 3},
      {name: 'Crumpet', votes: 1},
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 19,
    photoUrl: 'assets/cat_photos/19.png',
    names: [
      {name: 'Kyoshi', votes: 3},
      {name: 'Grey Ball', votes: 7},
      {name: 'Orwell', votes: 2}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  },
  {
    id: 20,
    photoUrl: 'assets/cat_photos/20.png',
    names: [
      {name: 'Charlie', votes: 1},
      {name: 'Raven', votes: 3},
      {name: 'Hobo', votes: 8}
    ],
    votingEnds: (Date.now() + (1000 * 60 * 60 * 24 * 5))
  }
]
