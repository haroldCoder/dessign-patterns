import { SubscriberPayUser } from "../../domain/contracts/ObserverUserPay";

interface DataPay{
    user: string;
    amount: number
}

export class SavePay implements SubscriberPayUser{
    pays: Array<DataPay> = [];

    update(amount: number, user: string): void {
        this.pays.push({user, amount})
        console.log(`pay saved of ${user} with pay of ${amount}$`);
    }
}