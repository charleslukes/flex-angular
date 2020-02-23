import { Component, OnInit, Input } from "@angular/core";
import { RecipeModel } from "../recipe.model";
import { ShoppingService } from "src/app/shopping-list/shopping-list.service";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;
  constructor(
    private shoppingService: ShoppingService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {}

  onSelectIngredient() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
}
