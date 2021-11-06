import { Cat, NameWithVote } from "src/app/models/cat";
import { Chance } from 'chance';

const chance: Chance.Chance = new Chance();

export const createCat = (partial: Partial<Cat> = {}): Cat => ({
    id: chance.integer({max: 20, min: 1}),
    photoUrl: chance.url(),
    names: [],
    votingEnds: Date.now() + (1000 * 60 * 60 * 24 * 5),
    ...partial
});

export const createNameWithVote = (partial: Partial<NameWithVote>): NameWithVote => ({
    name: chance.first(),
    votes: chance.integer({max: 20, min: 1}),
    ...partial
});
