// category.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators"; // Import map operator
import { cloneDeep } from "lodash";
// import { ObjectId } from 'bson';

export interface Category {
  id: number;
  name: string;
}
export interface CategoryNode {
  data: Category;
  children: CategoryNode[];
}

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  categories: Category[] = [];
  private categoriesSubject = new BehaviorSubject<CategoryNode | null>(null);

  constructor() {
    this.categoriesSubject.next({
      data: { id: 0, name: "Root" },
      children: [
        {
          data: { id: 1, name: "Category 1" },
          children: [
            { data: { id: 1.1, name: "Category 1.1" }, children: [] },
            {
              data: { id: 1.2, name: "Category 1.2" },
              children: [
                { data: { id: 1.21, name: "Category 1.2.1" }, children: [] },
                { data: { id: 1.22, name: "Category 1.2.2" }, children: [] },
              ],
            },
          ],
        },
        { data: { id: 2, name: "Category 2" }, children: [] },
        { data: { id: 3, name: "Category 3" }, children: [] },
      ],
    });
  }

  selectedCategory: Category | null = null;

  getCategories(): Observable<Category[]> {
    return this.categoriesSubject
      .asObservable()
      .pipe(map((categories) => cloneDeep(categories)));
  }

  addCategory(newCategoryName: string, targetCategoryId?) {
    if (targetCategoryId === undefined) {
      const newCategory = { id: Math.random(), name: newCategoryName };
    } else {
      const targetCategory = this.categories.find(targetCategoryId);
    }
  }
  editCategory(id, editedCategory) {
    const category = this.categories.find((category) => category.id === id);
    if (category) {
      category.name = editedCategory.name;
    }
  }
  deleteCategory(id) {
    this.categories = this.categories.filter((category) => category.id !== id);
  }

  setSelectedCategory(id) {
    this.selectedCategory = this.categories.find(
      (category) => category.id === id,
    );
  }
  getSelectedCategory() {
    return this.selectedCategory;
  }
}
