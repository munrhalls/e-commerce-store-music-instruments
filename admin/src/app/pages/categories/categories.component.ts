import { Component } from "@angular/core";
import { ListComponent } from "./list/list.component";

export interface Category {
  id: number;
  name: string;
  children?: Category[];
}

@Component({
  selector: "ngx-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  // comment for commit
  categories: Category[] = [
    {
      id: 1,
      name: "Category 1",
      children: [
        {
          id: 1.1,
          name: "Category 1.1",
          children: [
            { id: 1.11, name: "Category 1.1.1" },
            { id: 1.12, name: "Category 1.1.2" },
            {
              id: 1.13,
              name: "Category 1.1.3",
              children: [
                { id: 1.131, name: "Category 1.1.3.1" },
                { id: 1.131, name: "Category 1.1.3.2" },
                { id: 1.131, name: "Category 1.1.3.3" },
              ],
            },
          ],
        },
        { id: 1.2, name: "Category 1.2" },
        { id: 1.2, name: "Category 1.3" },
      ],
    },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ];
}
