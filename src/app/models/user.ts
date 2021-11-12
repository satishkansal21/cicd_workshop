export class User {
    userName: string = '';
    votes: Record<string, number> = {};
    constructor(userName: string) {
        this.userName = userName;
        this.votes = {};
    }
}
