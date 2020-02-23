import { EventEmitter } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.mdoel";

export class ShoppingService {
  public ingredientChanged: EventEmitter<
    IngredientModel[]
  > = new EventEmitter();

  private ingredients: IngredientModel[] = [
    new IngredientModel("Apple", 5),
    new IngredientModel("Tomato", 10),
    new IngredientModel("Magarine", 2)
  ];

  get newIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addRecipesToShoppingList(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
