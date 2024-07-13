// category.service.ts
import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { cloneDeep } from "lodash";
import { categoryNode as mockCategoryNode } from "./tests/categories.mock.spec";
export interface CategoryNode {
  id: string;
  name: string;
  pathIds: string[];
  children: CategoryNode[];
}

@Injectable({
  providedIn: "root",
})
export class CategoriesService implements OnInit {
  private categoryNode: CategoryNode = mockCategoryNode;
  private categoryNodeSubject = new BehaviorSubject<CategoryNode>(
    this.categoryNode,
  );
  categoryNode$ = this.categoryNodeSubject.asObservable();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCategoryNode();
  }

  saveCategoryNode(categoryNode: CategoryNode): void {
    localStorage.setItem("categoryNode", JSON.stringify(categoryNode));
  }
  loadCategoryNode(): void {
    const storedCategoryNode = localStorage.getItem("categoryNode");
    if (storedCategoryNode) {
      this.categoryNode = JSON.parse(storedCategoryNode);
    } else {
      console.log("fetching categories");
      this.http.get<CategoryNode>("/api/categories").subscribe((node) => {
        this.categoryNode = node;
        localStorage.setItem("categoryNode", JSON.stringify(node));
      });
    }
  }

  getCategoryNode$(): Observable<CategoryNode> {
    return this.categoryNodeSubject.asObservable();
  }

  findCategoryByPathIds(pathIds: string[]): CategoryNode {
    let node = this.categoryNode;
    for (const id of pathIds) {
      node = node.children.find((child) => child.id === id);
    }
    return node;
  }
  addCategoryToTarget(pathIds: string[], name: string): CategoryNode {
    const node = this.findCategoryByPathIds(pathIds);
    const newId = (Math.random() / Math.random()).toString();
    const newNode = {
      id: newId,
      name,
      pathIds: [...pathIds, newId],
      children: [],
    };
    node.children = [newNode, ...node.children];
    this.saveCategoryNode(this.categoryNode);

    return newNode;
  }
  updateTargetName(pathIds: string[], name: string): void {
    const node = this.findCategoryByPathIds(pathIds);
    node.name = name;
    this.saveCategoryNode(this.categoryNode);
  }
  deleteTarget(pathIds: string[]): void {
    const parentPathIds = pathIds.slice(0, -1);
    const parentNode = this.findCategoryByPathIds(parentPathIds);
    const index = parentNode.children.findIndex(
      (child) => child.id === pathIds[pathIds.length - 1],
    );
    parentNode.children.splice(index, 1);
    this.saveCategoryNode(this.categoryNode);
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
      this.saveCategoryNode(this.categoryNode);
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
      this.saveCategoryNode(this.categoryNode);
    }
  }
}
