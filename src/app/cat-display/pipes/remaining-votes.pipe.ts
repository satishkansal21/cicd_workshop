import { Pipe, PipeTransform } from '@angular/core';
import { UserVotes } from 'src/app/models/user-votes';

@Pipe({
  name: 'remainingVotes'
})
export class RemainingVotesPipe implements PipeTransform {

  transform(userVotes: UserVotes[], catId: string): number {
    const totalVotesForCat = userVotes.find((userVote) => userVote.catId === catId)?.votes;

    return totalVotesForCat ? 3 - totalVotesForCat : 3 ;
  }

}
