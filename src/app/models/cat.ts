export class Cat {
    id: number = 0;
    photoUrl: string = '';
    names: NameWithVote[] = [];
    votingEnds: number = (Date.now() + (1000 * 60 * 60 * 24 * 5));
}

export class NameWithVote {
    name: string = '';
    votes: number = 0;
    constructor (name: string) {
        this.name =  name;
        this.votes = 0;
    }
}