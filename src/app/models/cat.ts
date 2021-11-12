export class Cat {
    id: string = '';
    photoUrl: string = '';
    names: NameWithVote[] = [];
    votingEnds: number = (Date.now() + (1000 * 60 * 60 * 24 * 5));
}

export class NameWithVote {
    id: string = '';
    name: string = '';
    votes: number = 0;
    catId: string = '';
    constructor (name: string) {
        this.name =  name;
        this.votes = 0;
    }
}