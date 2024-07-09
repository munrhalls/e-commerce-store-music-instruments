import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { CategoriesModule } from "./categories/categories.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { CategoriesComponent } from "./categories/categories.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    CategoriesModule,
    MiscellaneousModule,
  ],
  declarations: [PagesComponent, CategoriesComponent],
})
export class PagesModule {}
