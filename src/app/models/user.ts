export class User {
    userName: string = '';
    votes: Record<number, number> = {};
    constructor(userName: string) {
        this.userName = userName;
        this.votes = {};
    }
}
