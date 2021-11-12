import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CATS, NAMES } from './cat-seed';
import { Cat } from './models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private readonly currentCat: ReplaySubject<Cat> = new ReplaySubject<Cat>(1);
  private readonly allCats: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>(CATS);
  private readonly names = NAMES;
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
      map((cat) => {
        return {
          ...cat,
          names: this.names.filter((name) => name.catId === cat.id)
        }
      }),
      tap((cat) => this.currentCat.next(cat))
    )
  };

  addACat(image: File): Observable<unknown> {
    console.log('In Add A Cat', image);
    return of(image);
  }

  private getRandomIntInclusive(min: number, max: number): number {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil); //The maximum is inclusive and the minimum is inclusive
  }
}
