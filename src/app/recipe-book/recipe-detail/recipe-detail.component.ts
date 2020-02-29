import { Component, OnInit, Input } from "@angular/core";
import { RecipeModel } from "../recipe.model";
import { ShoppingService } from "src/app/shopping-list/shopping-list.service";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel;
  id: number;

  constructor(
    private shoppingService: ShoppingService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  onSelectIngredient() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

  editRecipe() {
    this.router.navigate([`edit`], { relativeTo: this.route });
  }
}
