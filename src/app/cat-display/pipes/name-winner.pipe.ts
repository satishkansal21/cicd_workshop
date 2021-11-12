import { Pipe, PipeTransform } from '@angular/core';
import { NameWithVote } from 'src/app/models/name-with-vote';

@Pipe({
  name: 'nameWinner'
})
export class NameWinnerPipe implements PipeTransform {

  transform(names: NameWithVote[]): string {
    const sorted = names.sort((a, b) => a.votes < b.votes ? 1 : -1);

    return sorted[0].name;
  }

}
