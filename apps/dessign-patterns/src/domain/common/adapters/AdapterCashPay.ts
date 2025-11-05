import { ClientPay, PayData } from '../../contracts/ClientPay';
import { CashPayService } from '../../services/CashPay.service';

export class AdapterCashPay implements ClientPay {
    private cashPayService: CashPayService;

    constructor() {
        this.cashPayService = new CashPayService();
    }

    async methodPay(payData: PayData): Promise<void> {
        try {
            await this.cashPayService.methodPay(payData);
        } catch (error) {
            console.error('Error en el adaptador de pago en efectivo:', error);
            throw error;
        }
    }
}