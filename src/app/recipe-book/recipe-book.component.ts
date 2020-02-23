import { Component, OnInit } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipe-book.component.html",
  styleUrls: ["./recipe-book.component.css"],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((value: RecipeModel) => {
      this.selectedRecipe = value;
    });
  }

  showSingleRecipe(e: RecipeModel) {
    this.selectedRecipe = e;
  }
}
