import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NbIconLibraries } from "@nebular/theme";

interface Category {
  id: number;
  name: string;
  children?: Category[];
}

@Component({
  selector: "ngx-categories",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  evaIcons = [];

  categories: Category[] = [
    { id: 1, name: "Electronics", children: [{ id: 11, name: "Laptops" }] },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Accessories" },
  ];

  constructor() {}

  addCategory() {
    console.log("adding category");
    const newCategory: Category = { id: 3, name: "Books" };
    this.categories.push(newCategory);
  }

  moveCategory() {
    console.log("move/nest categ");
  }

  editCategory() {
    console.log("edit categ");
  }

  deleteCategory() {
    console.log("del categ");
  }
}
