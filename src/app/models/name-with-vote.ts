import {v4 as uuid} from 'uuid';

export class NameWithVote {
    id: string = '';
    name: string = '';
    votes: number = 0;
    catId: string = '';
    constructor (name: string, catId: string) {
        this.id = uuid();
        this.catId = catId;
        this.name =  name;
        this.votes = 0;
    }
}
