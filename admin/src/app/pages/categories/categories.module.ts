import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { NbCardModule } from "@nebular/theme";

@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [CommonModule, NbCardModule],
  exports: [ListComponent, ItemComponent, NbCardModule],
})
export class CategoriesModule {}
