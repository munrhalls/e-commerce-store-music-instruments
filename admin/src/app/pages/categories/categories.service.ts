// category.service.ts
import { Injectable } from "@angular/core";
import { Category } from "./categories.component"; // Your category type

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  selectedCategory: Category | null = null;

  setSelectedCategory(category: Category) {
    this.selectedCategory = category;
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }
}
