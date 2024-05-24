import { Component } from "@angular/core";

interface Category {
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
  categories: Category[] = [
    { id: 1, name: "Electronics", children: [{ id: 11, name: "Laptops" }] },
    { id: 2, name: "Clothing" },
  ];

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

  constructor() {}
}
