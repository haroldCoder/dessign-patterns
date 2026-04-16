import { Command } from "../../../domain/commands/command";
import { SaleDrinkService } from "./sale-drink.service";
import { SaveIngredientsService } from "./save-ingredients.service";

export class BuildDrink implements Command {
    constructor(
        private saveIngredientsService: SaveIngredientsService,
        private saleDrinkService: SaleDrinkService,
        private ingredients: string[],
        private drink: string
    ) { }

    execute(): void {
        this.ingredients.forEach((ingredient) => {
            this.saveIngredientsService.saveIngredients(ingredient);
        });
        this.saleDrinkService.saleDrink(this.drink, this.ingredients);
    }
}