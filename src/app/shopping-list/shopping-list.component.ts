import { Component, OnInit } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.mdoel";
import { ShoppingService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.newIngredients;

    this.shoppingService.ingredientChanged.subscribe(
      (ingredient: IngredientModel[]) => {
        this.ingredients = ingredient;
      }
    );
  }
}
