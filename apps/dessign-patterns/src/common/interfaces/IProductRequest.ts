import { ProductsType } from "../../domain/types/products.types";

export interface ProductRequest {
    producType: ProductsType;
    amount: number;
}