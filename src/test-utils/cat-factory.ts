import { Cat } from "src/app/models/cat";
import { Chance } from 'chance';
import { NameWithVote } from "src/app/models/name-with-vote";

const chance: Chance.Chance = new Chance();

export const createCat = (partial: Partial<Cat> = {}): Cat => ({
    id: chance.guid(),
    names: [],
    votingEnds: Date.now() + (1000 * 60 * 60 * 24 * 5),
    ...partial
});

export const createNameWithVote = (partial: Partial<NameWithVote>): NameWithVote => ({
    id: chance.guid(),
    name: chance.first(),
    votes: chance.integer({max: 20, min: 1}),
    catId: chance.guid(),
    ...partial
});
