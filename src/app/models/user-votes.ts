import {v4 as uuid} from 'uuid';

export class UserVotes {
    userId: string = '';
    id: string = '';
    catId: string = '';
    votes: number = 0;
    constructor(userId: string, catId: string, votes: number = 0) {
        this.userId = userId;
        this.catId = catId;
        this.id = uuid();
        this.votes = votes;
    }
}
