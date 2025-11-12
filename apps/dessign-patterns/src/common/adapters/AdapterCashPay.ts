import { ClientPay, PayData } from '../../domain/contracts/ClientPay';
import { CashPayService } from '../../domain/services/CashPay.service';
import { PublisherUserPay } from '../observers/PublishersUserPay';

export class AdapterCashPay implements ClientPay {
    private cashPayService: CashPayService;

    constructor(private publishersUserPay: PublisherUserPay) {
        this.cashPayService = new CashPayService();
    }

    async methodPay(payData: PayData): Promise<void> {
        try {
            await this.cashPayService.methodPay(payData);
            this.publishersUserPay.notifySubscribers(payData.amount, payData.user.name);
        } catch (error) {
            console.error('Error en el adaptador de pago en efectivo:', error);
            throw error;
        }
    }
}