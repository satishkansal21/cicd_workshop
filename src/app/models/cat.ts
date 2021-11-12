import { NameWithVote } from "./name-with-vote";
import {v4 as uuid} from 'uuid';

export class Cat {
    id: string = '';
    names: NameWithVote[] = [];
    votingEnds: number = (Date.now() + (1000 * 60 * 60 * 24 * 5));
    constructor() {
        this.id = uuid();
        this.names = [];
        this.votingEnds = (Date.now() + (1000 * 60 * 60 * 24 * 5));
    }
}
