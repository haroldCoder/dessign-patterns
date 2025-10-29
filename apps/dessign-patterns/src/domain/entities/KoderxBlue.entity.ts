import { Product } from "../contracts/Product";

export class KoderxBlueEntity implements Product {
    make(): void {
        console.log("Koderx Blue drink made!");
    }
}