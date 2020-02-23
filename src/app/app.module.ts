import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-book/recipe-item/recipe-item.component";
import { RecipeSingleComponent } from "./recipe-book/recipe-item/recipe-single/recipe-single.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingService } from "./shopping-list/shopping-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeSingleComponent,
    DropdownDirective
  ],
  imports: [BrowserModule],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
