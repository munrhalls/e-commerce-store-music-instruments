// category.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators"; // Import map operator
import { cloneDeep } from "lodash";
// import { ObjectId } from 'bson';

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
  root = (Math.random() / Math.random()).toString();
  IDcatgory1 = (Math.random() / Math.random()).toString();
  IDcatgory2 = (Math.random() / Math.random()).toString();
  IDcatgory21 = (Math.random() / Math.random()).toString();
  IDcatgory211 = (Math.random() / Math.random()).toString();
  IDcatgory3 = (Math.random() / Math.random()).toString();
  IDcatgory31 = (Math.random() / Math.random()).toString();
  categoryNode: CategoryNode = {
    id: this.root,
    name: "root",
    pathIds: [],
    children: [
      {
        id: this.IDcatgory1,
        name: "Category 1",
        pathIds: [this.IDcatgory1],
        children: [],
      },
      {
        id: this.IDcatgory2,
        name: "Category 2",
        pathIds: [this.IDcatgory2],
        children: [
          {
            id: this.IDcatgory21,
            name: "Category 2.1",
            pathIds: [this.IDcatgory2, this.IDcatgory21],
            children: [
              {
                id: this.IDcatgory211,
                name: "Category 2.1.1",
                pathIds: [this.IDcatgory2, this.IDcatgory21, this.IDcatgory211],
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: this.IDcatgory3,
        name: "Category 3",
        pathIds: [this.IDcatgory3],
        children: [
          {
            id: this.IDcatgory31,
            name: "Category 3.1",
            pathIds: [this.IDcatgory3, this.IDcatgory31],
            children: [],
          },
        ],
      },
    ],
  };

  findCategoryByPathIds(pathIds: string[]): CategoryNode {
    let node = this.categoryNode;
    for (const id of pathIds) {
      node = node.children.find((child) => child.id === id);
    }
    return node;
  }
  addSubCategory(pathIds: string[], name: string): void {
    const node = this.findCategoryByPathIds(pathIds);
    const newId = `${pathIds.join(".")}.${node.children.length + 1}`;
    node.children.push({
      id: newId,
      name,
      pathIds: [...pathIds, newId],
      children: [],
    });
  }
}
