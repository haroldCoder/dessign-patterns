export interface PrototypeProduct {
    clone(): PrototypeProduct;
    makeProduct(): void;
}