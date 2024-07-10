// category.service.ts
import { Injectable, Optional } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators"; // Import map operator
import { cloneDeep } from "lodash";
// import { ObjectId } from 'bson';

const root = (Math.random() / Math.random()).toString();
const IDcategory1 = (Math.random() / Math.random()).toString();
const IDcategory2 = (Math.random() / Math.random()).toString();
const IDcategory21 = (Math.random() / Math.random()).toString();
const IDcategory211 = (Math.random() / Math.random()).toString();
const IDcategory3 = (Math.random() / Math.random()).toString();
const IDcategory31 = (Math.random() / Math.random()).toString();

const categoryNode = {
  id: root,
  name: "root",
  pathIds: [],
  children: [
    {
      id: IDcategory1,
      name: "Category 1",
      pathIds: [IDcategory1],
      children: [],
    },
    {
      id: IDcategory2,
      name: "Category 2",
      pathIds: [IDcategory2],
      children: [
        {
          id: IDcategory21,
          name: "Category 2.1",
          pathIds: [IDcategory2, IDcategory21],
          children: [
            {
              id: IDcategory211,
              name: "Category 2.1.1",
              pathIds: [IDcategory2, IDcategory21, IDcategory211],
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: IDcategory3,
      name: "Category 3",
      pathIds: [IDcategory3],
      children: [
        {
          id: IDcategory31,
          name: "Category 3.1",
          pathIds: [IDcategory3, IDcategory31],
          children: [],
        },
      ],
    },
  ],
};
export interface CategoryNode {
  id: string;
  name: string;
  pathIds: string[];
  children: CategoryNode[];
}

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(@Optional() private categoryNode?: CategoryNode) {}
  saveCategoryNode(categoryNode: CategoryNode): void {
    localStorage.setItem("categoryNode", JSON.stringify(categoryNode));
  }
  loadCategoryNode(): void {
    const storedCategoryNode = localStorage.getItem("categoryNode");
    if (storedCategoryNode) {
      this.categoryNode = JSON.parse(storedCategoryNode);
    }
  }

  getCategoryNode(): Observable<CategoryNode> {
    return new BehaviorSubject<CategoryNode>(
      cloneDeep(this.categoryNode),
    ).asObservable();
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

    node.children.push(newNode);
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
