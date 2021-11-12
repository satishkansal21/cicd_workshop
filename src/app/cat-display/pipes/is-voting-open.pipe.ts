import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isVotingOpen'
})
export class IsVotingOpenPipe implements PipeTransform {

  transform(value: number): boolean {
    const now = Date.now();

    return now < value; 
  }
}
