import { ProductEntity } from "../../domain/entities/Product.entity";
import { Decorators } from "./Decorators";

export class BaseDecoratorProduct implements Decorators<ProductEntity>{
    component: Decorators<ProductEntity>;

    constructor(c: Decorators<ProductEntity>){
        this.component = c;
    }

    execute(): ProductEntity {
        return this.component.execute();
    }
}