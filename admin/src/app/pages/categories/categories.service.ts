// category.service.ts
import { Injectable, Optional } from "@angular/core";
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
  constructor(@Optional() private categoryNode?: CategoryNode) {
    if (!categoryNode) {
      const root = (Math.random() / Math.random()).toString();
      const IDcategory1 = (Math.random() / Math.random()).toString();
      const IDcategory2 = (Math.random() / Math.random()).toString();
      const IDcategory21 = (Math.random() / Math.random()).toString();
      const IDcategory211 = (Math.random() / Math.random()).toString();
      const IDcategory3 = (Math.random() / Math.random()).toString();
      const IDcategory31 = (Math.random() / Math.random()).toString();

      categoryNode = {
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
    }
    if (categoryNode) {
      this.categoryNode = cloneDeep(categoryNode);
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
  addSubCategory(pathIds: string[], name: string): CategoryNode {
    const node = this.findCategoryByPathIds(pathIds);
    const newId = (Math.random() / Math.random()).toString();
    const newNode = {
      id: newId,
      name,
      pathIds: [...pathIds, newId],
      children: [],
    };

    node.children.push(newNode);
    return newNode;
  }
}
