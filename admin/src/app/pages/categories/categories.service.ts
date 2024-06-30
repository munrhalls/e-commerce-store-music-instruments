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
  categoryNode: CategoryNode = {
    id: "root",
    name: "root",
    pathIds: ["root"],
    children: [
      {
        id: "1",
        name: "Category 1",
        pathIds: ["root", "1"],
        children: [],
      },
      {
        id: "2",
        name: "Category 2",
        pathIds: ["root", "2"],
        children: [
          {
            id: "2.1",
            name: "Category 2.1",
            pathIds: ["root", "2", "1"],
            children: [
              {
                id: "2.1.1",
                name: "Category 2.1.1",
                pathIds: ["root", "2", "1", "1"],
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "3",
        name: "Category 3",
        pathIds: ["root", "3"],
        children: [
          {
            id: "3.1",
            name: "Category 3.1",
            pathIds: ["root", "3", "1"],
            children: [],
          },
        ],
      },
    ],
  };

  findCategoryByPathIds(pathIds: string[]): CategoryNode {
    let node = this.categoryNode;
    console.log(this.categoryNode);
    for (const id of pathIds) {
      node = node.children.find((child) => child.id === id);
    }
    return node;
  }
}
