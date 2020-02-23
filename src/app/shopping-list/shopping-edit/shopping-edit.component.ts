import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { IngredientModel } from "src/app/shared/ingredient.mdoel";
import { ShoppingService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: true }) nameInput: ElementRef;
  @ViewChild("amountInput", { static: true }) amountInput: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.shoppingService.addNewIngredient(new IngredientModel(name, amount));
  }
}
