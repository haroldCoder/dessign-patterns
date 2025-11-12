import { ClientPay, PayData } from '../../domain/contracts/ClientPay';
import { PaypalPayService } from '../../domain/services/PaypalPay.service';

export class AdapterPaypalPay implements ClientPay {
    private paypalPayService: PaypalPayService;

    constructor() {
        this.paypalPayService = new PaypalPayService();
    }

    async methodPay(payData: PayData): Promise<void> {
        try {
            await this.paypalPayService.methodPay(payData);
        } catch (error) {
            console.error('Error en el adaptador de pago PayPal:', error);
            throw error;
        }
    }
}