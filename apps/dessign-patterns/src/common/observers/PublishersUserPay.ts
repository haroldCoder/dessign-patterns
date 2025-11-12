import { SubscriberPayUser } from "../../domain/contracts/ObserverUserPay";

export class PublisherUserPay{
    observers: SubscriberPayUser[] = []
    mainState: any

    subscribe(s: SubscriberPayUser){
        this.observers.push(s);
    }

    unSubscribe(s: SubscriberPayUser){
        const newObservers = this.observers.filter(element => element !== s);
        this.observers = newObservers;
    }

    notifySubscribers(amount: number, user: string){
        this.observers.forEach(obv => obv.update(amount, user))
    }
}