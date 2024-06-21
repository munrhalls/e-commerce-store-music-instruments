import { Component } from "@angular/core";
import { ListComponent } from "./list/list.component";

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  categories: any[] = [
    {
      id: 1,
      name: "Category 1",
      children: [
        { id: 1.1, name: "Category 1.1" },
        { id: 1.2, name: "Category 1.2" },
      ],
    },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ];
}
