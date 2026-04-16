import { ProductsOrderFactory } from "../../domain/factories/ProductOrder.factory";
import { CreateOrderService } from "../../infrastructure/services/createOrder.service";
import { BaseHandlerChain } from "../BaseHandlerChain";
import { ProductRequest } from "../interfaces/IProductRequest";

export class RequestOrder extends BaseHandlerChain {
    override handle(request: ProductRequest): any {
        console.log(`Order requested for product: ${request.amount}`);
        new CreateOrderService(new ProductsOrderFactory()).createOrder(request.producType);
        return super.handle(request);
    }
}