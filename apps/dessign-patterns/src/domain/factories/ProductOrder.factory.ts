import { KoderxBlueEntity } from "../entities/KoderxBlue.entity";
import { Product } from "../contracts/Product";
import { ProductsType } from "../types/products.types";
import { OrderFactory } from "./Order.factory";
import { KoderxRedEntity } from "../entities/KoderxRed.entity";

export class ProductsOrderFactory extends OrderFactory {
    override createProduct(productType: ProductsType): Product {
        switch (productType) {
            case "koderx-red":
                return new KoderxRedEntity();
            case "koderx-blue":
                return new KoderxBlueEntity();
        }

        throw new Error("Product not found");
    }
}