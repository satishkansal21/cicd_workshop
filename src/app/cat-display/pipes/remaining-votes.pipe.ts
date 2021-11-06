import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remainingVotes'
})
export class RemainingVotesPipe implements PipeTransform {

  transform(votes: number): number {
    return votes ? 3 - votes : 3 ;
  }

}
