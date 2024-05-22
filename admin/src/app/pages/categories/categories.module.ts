import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesComponent } from "./categories.component";
import { RouterModule } from "@angular/router";
import {
  NbSidebarModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
} from "@nebular/theme";

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule,
    NbButtonModule,
  ],
})
export class CategoriesModule {}
