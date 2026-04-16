import { Product } from "../../domain/contracts/Product";
import { OrderFactory } from "../../domain/factories/Order.factory";
import { ProductsType } from "../../domain/types/products.types";

export class CreateOrderService {
    orders: Product[] = [];

    constructor(private factory: OrderFactory) { }

    createOrder(productType: ProductsType): Product {
        const product = this.factory.createProduct(productType);
        this.orders.push(product);
        product.make();
        return product;
    }
}