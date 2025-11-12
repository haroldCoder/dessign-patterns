import { BaseHandlerChain } from "../BaseHandlerChain";
import { DataRequest } from "../interfaces/IDataRequest";
import { ProductRequest } from "../interfaces/IProductRequest";

export class ValidAmount extends BaseHandlerChain {
    constructor(private dataRequest: DataRequest) {
        super();
    }

    override handle(productRequest: ProductRequest): any {
        if (this.dataRequest.user.amount >= this.dataRequest.amount) {
            console.log("Amount is valid.");
            return super.handle(productRequest);
        } else {
            console.log("Insufficient amount.");
            return null;
        }
    }
}