import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { MenuComponent } from "./menu/menu.component";

import {
  NbIconModule,
  NbDialogModule,
  NbInputModule,
  NbButtonModule,
  NbFormFieldModule,
} from "@nebular/theme";
@NgModule({
  declarations: [ListComponent, ItemComponent, MenuComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbDialogModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListComponent,
    ItemComponent,
    NbIconModule,
    NbDialogModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class CategoriesModule {}
