import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { MenuComponent } from "./menu/menu.component";

import {
  NbIconModule,
  NbDialogModule,
  NbInputModule,
  NbButtonModule,
} from "@nebular/theme";
@NgModule({
  declarations: [ListComponent, ItemComponent, MenuComponent],
  imports: [
    CommonModule,
    NbIconModule,
    NbDialogModule,
    NbInputModule,
    NbButtonModule,
  ],
  exports: [
    ListComponent,
    ItemComponent,
    NbIconModule,
    NbDialogModule,
    NbInputModule,
    NbButtonModule,
  ],
})
export class CategoriesModule {}
