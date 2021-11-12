import { UserVotes } from "./user-votes";

export class User {
    userName: string = '';
    userVotes: UserVotes[] = [];
    constructor(userName: string) {
        this.userName = userName;
        this.userVotes = [];
    }
}
