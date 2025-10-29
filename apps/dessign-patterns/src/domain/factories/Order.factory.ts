import { Product } from "../contracts/Product";
import { ProductsType } from "../types/products.types";

export abstract class OrderFactory {
    abstract createProduct(product: ProductsType): Product;
}