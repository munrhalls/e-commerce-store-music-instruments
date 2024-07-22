// category.service.ts
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { cloneDeep } from "lodash";
import { CategoryTree as mockCategoryTree } from "./tests/categories.mock-data.spec";
import { CategoryTree } from "./categories.model";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  private CategoryTree: CategoryTree | null = mockCategoryTree;

  initializeCategoryTree() {}
  fetchCategoryTree(): Promise<CategoryTree[]> {
    return this.http.get<CategoryTree[]>("/api/categories").toPromise();
  }
  getCategoryTree() {
    return cloneDeep(this.CategoryTree);
  }
  findCategoryByPathIds(pathIds: string[]): CategoryTree {
    let node = this.CategoryTree;
    for (const id of pathIds) {
      node = node.children.find((child) => child.id === id);
    }
    return node;
  }
  addCategoryToTarget(pathIds: string[], name: string): CategoryTree {
    const node = this.findCategoryByPathIds(pathIds);
    const newId = (Math.random() / Math.random()).toString();
    const newNode = {
      id: newId,
      name,
      pathIds: [...pathIds, newId],
      children: [],
    };
    node.children = [...node.children, newNode];
    const clone = cloneDeep(this.CategoryTree);

    return cloneDeep(newNode);
  }
  updateTargetName(pathIds: string[], name: string): void {
    const node = this.findCategoryByPathIds(pathIds);
    node.name = name;
  }
  deleteTarget(pathIds: string[]): void {
    const parentPathIds = pathIds.slice(0, -1);
    const parentNode = this.findCategoryByPathIds(parentPathIds);
    const index = parentNode.children.findIndex(
      (child) => child.id === pathIds[pathIds.length - 1],
    );
    parentNode.children.splice(index, 1);
  }
  moveTargetDown(pathIds: string[]): void {
    const parentPathIds = pathIds.slice(0, -1);
    const parentNode = this.findCategoryByPathIds(parentPathIds);
    const index = parentNode.children.findIndex(
      (child) => child.id === pathIds[pathIds.length - 1],
    );
    if (index < parentNode.children.length - 1) {
      const target = parentNode.children[index];
      parentNode.children.splice(index, 1);
      parentNode.children.splice(index + 1, 0, target);
    }
  }
  moveTargetUp(pathIds: string[]): void {
    const parentPathIds = pathIds.slice(0, -1);
    const parentNode = this.findCategoryByPathIds(parentPathIds);
    const targetIndex = parentNode.children.findIndex(
      (child) => child.id === pathIds[pathIds.length - 1],
    );
    if (targetIndex > 0) {
      const target = parentNode.children[targetIndex];
      parentNode.children.splice(targetIndex, 1);
      parentNode.children.splice(targetIndex - 1, 0, target);
    }
  }
}
