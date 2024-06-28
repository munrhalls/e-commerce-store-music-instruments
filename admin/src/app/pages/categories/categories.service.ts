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
export class CategoriesService {}
