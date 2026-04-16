export class SaveIngredientsService {
    private ingredients: string[] = [];
    constructor() { }

    saveIngredients(ingredient: string): void {
        this.ingredients.push(ingredient);
        console.log(`Ingrediente ${ingredient} guardado`);
    }
}