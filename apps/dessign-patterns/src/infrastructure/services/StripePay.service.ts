import { Users } from "../../common/Users";

export class StripePay {
    constructor(private cardNumberDest: number,
        private pass: number,
        private sessionToken: string){}

    createPayStripe(amount: number, user: Users) : boolean {
        if (user && this.pass && this.sessionToken) {
            console.log(`Transaction of ${amount} to ${this.cardNumberDest} account`);
            return true;
        }

        return false;
    }
}