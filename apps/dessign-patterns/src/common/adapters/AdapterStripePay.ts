import { ClientPay, PayData } from "../../domain/contracts/ClientPay";
import { StripePay } from "../../domain/services/StripePay.service";

export class AdapterStripePay implements ClientPay{
    stripePay: StripePay;

    constructor(stripePay: StripePay){
        this.stripePay = stripePay;
    }

    methodPay = (payData: PayData) => {
        this.stripePay.createPayStripe(payData.amount, payData.user);
    };
}