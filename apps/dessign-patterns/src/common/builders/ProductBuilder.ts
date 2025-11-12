import { ProductEntity } from "../../domain/entities/Product.entity";
import { ProductsType } from "../../domain/types/products.types";

export class ProductBuilder {
    private _id?: string;
    private _name?: ProductsType;
    private _price: number = 0;

    withId(id: string) {
        this._id = id;
        return this;
    }

    withName(name: ProductsType) {
        this._name = name;
        return this;
    }

    withPrice(price: number) {
        this._price = price;
        return this;
    }

    build(): ProductEntity {
        const factory = (ProductEntity as any).create ?? (ProductEntity as any).from ?? null;
        if (factory) {
            return factory.call(ProductEntity, this._id, this._name, this._price) as ProductEntity;
        }

        return Object.assign(
            Object.create(ProductEntity.prototype),
            { id: this._id, name: this._name, price: this._price }
        ) as ProductEntity;
    }
}