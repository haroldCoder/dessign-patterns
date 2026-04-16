interface ProductFinal {
    ingredients: string[];
    name: string;
}

export class SaleDrinkService {
    private productFinal: ProductFinal[] = [];
    constructor() { }

    saleDrink(drink: string, ingredients: string[]): void {
        console.log(`Bebida ${drink} vendida`);
        this.productFinal.push({ ingredients, name: drink });
    }
}