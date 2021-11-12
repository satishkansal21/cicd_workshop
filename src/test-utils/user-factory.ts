import { User } from '../app/models/user';
import { Chance } from 'chance';
import { UserVotes } from 'src/app/models/user-votes';

const chance: Chance.Chance = new Chance(); 

export const createUser = (partial: Partial<User> = {}): User => ({
    userName: chance.first(),
    userVotes: [],
    ...partial
});

export const createUserVotes = (partial: Partial<UserVotes> = {}): UserVotes => ({
    userId: chance.first(),
    catId: chance.guid(),
    id: chance.guid(),
    votes: chance.integer({min: 1, max: 3}),
    ...partial
});
