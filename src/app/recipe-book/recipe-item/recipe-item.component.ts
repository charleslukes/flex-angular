import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { RecipeModel } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  recipes: RecipeModel[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
