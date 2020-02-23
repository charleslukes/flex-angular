import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() viewToDisplay: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  recipeCliked() {
    this.viewToDisplay.emit(true);
  }

  shoppingListCliked() {
    this.viewToDisplay.emit(false);
  }

  ngOnInit() {}
}
