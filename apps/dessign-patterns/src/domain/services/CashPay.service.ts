import { ClientPay } from '../contracts/ClientPay';
import { PayData } from '../contracts/ClientPay';

export class CashPayService implements ClientPay {
    constructor() {}

    async methodPay(payData: PayData): Promise<void> {
        try {
            // Simulación de pago en efectivo
            console.log('Procesando pago en efectivo...');
            console.log(`Monto a pagar: ${payData.amount} ${payData.currency}`);
            console.log(`Usuario: ${payData.user.name}`);
            console.log('Pago en efectivo exitoso');
        } catch (error) {
            console.error('Error al procesar el pago en efectivo:', error);
            throw error;
        }
    }
}
