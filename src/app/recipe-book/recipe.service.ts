import { RecipeModel } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.mdoel";
import { ShoppingService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  public selectedRecipe: EventEmitter<RecipeModel> = new EventEmitter();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      "A Test recipe",
      "Description of a test recipe",
      "https://i.picsum.photos/id/100/2500/1656.jpg",
      [new IngredientModel("meat", 1), new IngredientModel("beans", 12)]
    ),
    new RecipeModel(
      "A Second recipe",
      "Description of the second recipe",
      "https://i.picsum.photos/id/1006/3000/2000.jpg",
      [new IngredientModel("wheat", 3), new IngredientModel("plantain", 8)]
    ),
    new RecipeModel(
      "A Third recipe",
      "Description of the third recipe",
      "https://i.picsum.photos/id/1005/5760/3840.jpg",
      [new IngredientModel("yoghurt", 19), new IngredientModel("corn", 120)]
    )
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  onAddIngredients(ingredient: IngredientModel) {
    this.shoppingService.addNewIngredient(ingredient);
  }

  addToShoppingList(ingredient: IngredientModel[]) {
    this.shoppingService.addRecipesToShoppingList(ingredient);
  }
}
