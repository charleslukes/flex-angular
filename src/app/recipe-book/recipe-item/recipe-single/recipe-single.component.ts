import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RecipeModel } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: "app-recipe-single",
  templateUrl: "./recipe-single.component.html",
  styleUrls: ["./recipe-single.component.css"]
})
export class RecipeSingleComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSingleRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
