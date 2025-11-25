import { BaseHandlerChain } from "../BaseHandlerChain";
import { OrderData } from "../interfaces/OrderData";

export class PackageProduct extends BaseHandlerChain {
    override handle(orderData: OrderData): any {
        console.log(`\n📦 [EMPAQUETADO] Orden ${orderData.orderId}`);
        console.log(`   → Empaquetando: ${orderData.productName}`);
        console.log(`   → Cliente: ${orderData.customerName}`);
        
        if (!orderData.productName || orderData.productName.trim() === "") {
            console.log(`   ✗ Error: No se especificó un producto válido`);
            return null;
        }
        
        console.log(`   ✓ Producto empaquetado correctamente`);
        return super.handle(orderData);
    }
}
