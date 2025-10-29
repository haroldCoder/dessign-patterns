import { CreateOrderService } from "../../domain/services/createOrder.service";
import { ProductsType } from "../../domain/types/products.types";

export class CreateOrderUseCae {
    constructor(private order: CreateOrderService){}

    execute(product: ProductsType): void {
        this.order.createOrder(product);
    }
}