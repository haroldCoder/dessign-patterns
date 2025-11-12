import { SubscriberPayUser } from "../../domain/contracts/ObserverUserPay";

export class PointUserForPay implements SubscriberPayUser{
    update(amount: number, user: string): void {
        const points = amount / 1000;

        console.log(`was asigned ${points} points to user ${user}`);
    }
}