import { Component, OnInit, Input } from "@angular/core";
import { RecipeModel } from "../../recipe.model";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-recipe-single",
  templateUrl: "./recipe-single.component.html",
  styleUrls: ["./recipe-single.component.css"]
})
export class RecipeSingleComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Input() index: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
