import { ProductEntity } from "../../domain/entities/Product.entity";
import { BaseDecoratorProduct } from "./BaseDecoratorProduct";

export class Discount extends BaseDecoratorProduct {
    override execute(): ProductEntity {
        return this.extra(this.component.execute());
    }

    extra(product: ProductEntity): ProductEntity {
        product.price -= 100;
        return product;
    }
}