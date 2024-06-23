import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import {
  NbCardModule,
  NbListModule,
  NbActionsModule,
  NbDialogModule,
  NbButtonModule,
  NbInputModule,
} from "@nebular/theme";
@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbActionsModule,
    NbButtonModule,
    NbInputModule,
  ],
  exports: [
    ListComponent,
    ItemComponent,
    NbCardModule,
    NbListModule,
    NbActionsModule,
    NbDialogModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class CategoriesModule {}
