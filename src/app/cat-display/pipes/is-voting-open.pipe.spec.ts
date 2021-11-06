import { IsVotingOpenPipe } from './is-voting-open.pipe';

describe('IsVotingOpenPipe', () => {
  it('create an instance', () => {
    const pipe = new IsVotingOpenPipe();
    expect(pipe).toBeTruthy();
  });
});
