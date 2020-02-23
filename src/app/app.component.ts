import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-tutorial-app";

  viewToDisplay: boolean = true;

  getDisplay(e: any) {
    this.viewToDisplay = e;
  }
}
