// import { StoreModule } from "@ngrx/store";
// import * as fromCategories from "../../@store/categories/categories.reducer";
import { AsyncPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { MenuComponent } from "./menu/menu.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";

import {
  NbCardModule,
  NbIconModule,
  NbDialogModule,
  NbInputModule,
  NbButtonModule,
  NbFormFieldModule,
} from "@nebular/theme";
import { DesktopUiComponent } from './desktop-ui/desktop-ui.component';
import { MobileUiComponent } from './mobile-ui/mobile-ui.component';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    MenuComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DesktopUiComponent,
    MobileUiComponent,
    LoaderComponent,
  ],
  imports: [
    // StoreModule.forFeature(fromCategories.categoriesFeature),
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListComponent,
    NbCardModule,
    NbIconModule,
    NbDialogModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [AsyncPipe],
})
export class CategoriesModule {}
