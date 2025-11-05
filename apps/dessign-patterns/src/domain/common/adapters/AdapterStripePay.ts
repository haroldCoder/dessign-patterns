import { ClientPay, PayData } from "../../contracts/ClientPay";
import { StripePay } from "../../services/StripePay.service";

export class AdapterStripePay implements ClientPay{
    stripePay: StripePay;

    constructor(stripePay: StripePay){
        this.stripePay = stripePay;
    }

    methodPay = (payData: PayData) => {
        this.stripePay.createPayStripe(payData.amount, payData.user);
    };
}