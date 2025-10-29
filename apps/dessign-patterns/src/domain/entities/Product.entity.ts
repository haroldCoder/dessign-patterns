import { Decorators } from "../common/decorators/Decorators";
import { PrototypeProduct } from "../contracts/PrototypeProduct";
import { ProductsType } from "../types/products.types";
import { KoderxBlueEntity } from "./KoderxBlue.entity";
import { KoderxRedEntity } from "./KoderxRed.entity";

export class ProductEntity implements PrototypeProduct, Decorators<ProductEntity> {
    constructor(
        public id: string,
        public name: ProductsType,
        public price: number
    ) { }

    clone(): PrototypeProduct {
        return new ProductEntity(this.id, this.name, this.price);
    }

    makeProduct(): void {
        switch (this.name) {
            case "koderx-blue":
                new KoderxBlueEntity().make()
                break;
            case "koderx-red":
                new KoderxRedEntity().make()
                break;
            default:
                throw new Error("Product not found");
        }
    }

    execute(): ProductEntity{
        return this;
    }
}