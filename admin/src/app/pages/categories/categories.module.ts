import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NbCardModule,
  NbListModule,
  NbActionsModule,
  NbDialogModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
} from "@nebular/theme";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbActionsModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbMenuModule,
  ],
  exports: [
    NbCardModule,
    NbListModule,
    NbActionsModule,
    NbDialogModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbMenuModule,
  ],
})
export class CategoriesModule {}
