import { User } from '../app/models/user';
import { Chance } from 'chance';

const chance: Chance.Chance = new Chance(); 

export const createUser = (partial: Partial<User> = {}): User => ({
    userName: chance.first(),
    votes: {},
    ...partial
});
