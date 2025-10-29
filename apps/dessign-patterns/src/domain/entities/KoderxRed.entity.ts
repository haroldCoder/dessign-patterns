import { Product } from "../contracts/Product";

export class KoderxRedEntity implements Product {
    make(): void {
        console.log("Koderx Red drink made!");
    }
}