import { BaseHandlerChain } from "../BaseHandlerChain";
import { OrderData } from "../interfaces/OrderData";

export class ShipToLocation extends BaseHandlerChain {
    override handle(orderData: OrderData): any {
        console.log(`\n🚀 [ENVÍO] Orden ${orderData.orderId}`);
        
        if (!orderData.destination || orderData.destination.trim() === "") {
            console.log(`   ✗ Error: No se especificó una dirección de destino válida`);
            return null;
        }
        
        console.log(`   → Enviando a: ${orderData.destination}`);
        console.log(`   → Cliente: ${orderData.customerName}`);
        console.log(`   ✓ Orden enviada exitosamente!`);
        
        return super.handle(orderData);
    }
}
