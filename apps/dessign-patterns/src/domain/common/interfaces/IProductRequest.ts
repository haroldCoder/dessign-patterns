import { ProductsType } from "../../types/products.types";

export interface ProductRequest {
    producType: ProductsType;
    amount: number;
}