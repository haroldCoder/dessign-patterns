import { BaseHandlerChain } from "../BaseHandlerChain";
import { OrderData } from "../interfaces/OrderData";

export class LoadToTransport extends BaseHandlerChain {
    override handle(orderData: OrderData): any {
        console.log(`\n🚚 [CARGA AL TRANSPORTE] Orden ${orderData.orderId}`);
        console.log(`   → Cargando paquete al vehículo de reparto`);
        console.log(`   → Destino programado: ${orderData.destination}`);
        console.log(`   ✓ Paquete cargado al transporte`);
        
        return super.handle(orderData);
    }
}
