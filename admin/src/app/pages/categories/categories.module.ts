import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesComponent } from "./categories.component";
import { RouterModule } from "@angular/router";
import {
  NbSidebarModule,
  NbLayoutModule,
  NbCardModule,
  NbAccordionModule,
  NbActionsModule,
  NbListModule,
  NbIconModule,
  NbButtonModule,
} from "@nebular/theme";
import { CategoryItemComponent } from "./category-item/category-item.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryInterfaceComponent } from "./category-interface/category-interface.component";

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryInterfaceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    NbAccordionModule,
    NbActionsModule,
    NbListModule,
    NbIconModule,
    NbSidebarModule,
    NbButtonModule,
  ],
})
export class CategoriesModule {}
