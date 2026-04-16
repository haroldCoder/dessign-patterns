import { ClientPay, PayData } from '../../domain/contracts/ClientPay';

export class PaypalPayService implements ClientPay {
    constructor() { }

    async methodPay(payData: PayData): Promise<void> {
        try {
            console.log('Procesando pago con PayPal...');
            console.log(`Usuario: ${payData.user.name}`);
            console.log(`Monto a pagar: ${payData.amount} ${payData.currency}`);
            console.log('Transacción PayPal exitosa');

        } catch (error) {
            console.error('Error al procesar el pago con PayPal:', error);
            throw error;
        }
    }
}
