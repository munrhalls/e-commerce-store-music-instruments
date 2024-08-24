// category.service.ts
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { map, catchError, delay } from "rxjs/operators";
import { cloneDeep } from "lodash";
import { categoryTree as mockCategoryTree } from "./__tests__/mockData";
import { CategoryTree } from "./categories.model";
import { ServerConnectionError } from "./../../@core/error-handler/errors/serverConnectionError";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  private categoryTree: CategoryTree | null = mockCategoryTree;

  fetchCategoryTree(): Observable<CategoryTree> {
    console.log(this.categoryTree);
    return of(this.categoryTree).pipe(delay(500));
  }
  // return this.http.get<CategoryTree>("/api/categories").pipe(
  //   catchError((error: HttpErrorResponse) => {
  //     if (error.status === 0) {
  //       return throwError(() => new ServerConnectionError());
  //     }
  //     return throwError(() => new ServerConnectionError());
  //   }),
  // );

  getCategoryTree() {
    return of(cloneDeep(this.categoryTree));
  }
  findCategoryByPathIds(targetPathIds: string[]): Observable<CategoryTree> {
    let node = this.categoryTree;
    for (const id of targetPathIds) {
      node = node.children.find((child) => child.id === id);
    }
    return of(node);
  }
  addCategory(
    targetPathIds: string[],
    newCategory: CategoryTree,
  ): Observable<CategoryTree> {
    // const target = this.findCategoryByPathIds(targetPathIds);
    // const newId = (Math.random() / Math.random()).toString();
    // const newCategory = {
    //   id: newId,
    //   name: ,
    //   pathIds: [...target.pathIds, newId],
    //   children: [],
    // };
    // target.children = [...target.children, newCategory];
    // const clone = cloneDeep(this.categoryTree);
    try {
      return of(cloneDeep(this.categoryTree));
    } catch {
      return throwError(() => new ServerConnectionError());
    }
  }
  updateName(targetPathIds: string[], name: string): Observable<CategoryTree> {
    // const node = this.findCategoryByPathIds(pathIds);
    // node.name = name;
    return of(cloneDeep(this.categoryTree));
  }
  moveCategoryDown(targetPathIds: string[]): Observable<CategoryTree> {
    // const parentPathIds = pathIds.slice(0, -1);
    // const parentNode = this.findCategoryByPathIds(parentPathIds);
    // const index = parentNode.children.findIndex(
    //   (child) => child.id === pathIds[pathIds.length - 1],
    // );
    // if (index < parentNode.children.length - 1) {
    //   const target = parentNode.children[index];
    //   parentNode.children.splice(index, 1);
    //   parentNode.children.splice(index + 1, 0, target);
    // }
    return of(cloneDeep(this.categoryTree));
  }
  moveCategoryUp(targetPathIds: string[]): Observable<CategoryTree> {
    // const parentPathIds = pathIds.slice(0, -1);
    // const parentNode = this.findCategoryByPathIds(parentPathIds);
    // const targetIndex = parentNode.children.findIndex(
    //   (child) => child.id === pathIds[pathIds.length - 1],
    // );
    // if (targetIndex > 0) {
    //   const target = parentNode.children[targetIndex];
    //   parentNode.children.splice(targetIndex, 1);
    //   parentNode.children.splice(targetIndex - 1, 0, target);
    // }
    return of(cloneDeep(this.categoryTree));
  }
  deleteCategory(targetPathIds: string[]): Observable<CategoryTree> {
    // const parentPathIds = pathIds.slice(0, -1);
    // const parentNode = this.findCategoryByPathIds(parentPathIds);
    // const index = parentNode.children.findIndex(
    //   (child) => child.id === pathIds[pathIds.length - 1],
    // );
    // parentNode.children.splice(index, 1);

    return of(cloneDeep(this.categoryTree));
  }
}
