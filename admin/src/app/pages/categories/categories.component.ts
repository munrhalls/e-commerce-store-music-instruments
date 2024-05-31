import { Component } from "@angular/core";
import { NbIconLibraries } from "@nebular/theme";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

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

  dragStarted(category) {
    // Add visual indicator to the category (e.g., change background)
  }
  dragEnded(category) {
    // Remove visual indicator
  }

  drop(event: CdkDragDrop<any>) {
    event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex;
  }

  editCategory() {
    console.log("edit categ");
  }

  deleteCategory() {
    console.log("del categ");
  }
}
