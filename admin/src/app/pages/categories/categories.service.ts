// category.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators"; // Import map operator
import { cloneDeep } from "lodash";
// import { ObjectId } from 'bson';

export interface CategoryNode {
  id: string;
  parentId: string | "root";
  name: string;
  children: CategoryNode[];
}

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  categoryNode: CategoryNode | null = {
    id: "root",
    parentId: "root",
    name: "Root",
    children: [
      {
        id: "1",
        parentId: "root",
        name: "Category 1",
        children: [],
      },
      {
        id: "2",
        parentId: "root",
        name: "Category 2",
        children: [
          {
            id: "2.1",
            parentId: "2",
            name: "Category 2.1",
            children: [
              {
                id: "2.1.1",
                parentId: "2.1",
                name: "Category 2.1.1",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };
  private categoryNodeSubject = new BehaviorSubject<CategoryNode>(
    this.categoryNode,
  );
  categoryNode$ = this.categoryNodeSubject.asObservable();

  findNodeById(node: CategoryNode, id: string): CategoryNode | undefined {
    if (node.id === id) {
      return node;
    }
    for (const child of node.children) {
      const found = this.findNodeById(child, id);
      if (found) {
        return found;
      }
    }
    return undefined;
  }
  createNode(parentId: string, newNode: CategoryNode): void {
    if (this.categoryNode === null) {
      this.categoryNode = newNode;
      return this.categoryNodeSubject.next(cloneDeep(this.categoryNode));
    }
    const parent = this.findNodeById(this.categoryNode, parentId);
    if (parent) {
      parent.children.push(newNode);
      this.categoryNodeSubject.next(cloneDeep(this.categoryNode));
    } else {
      throw new Error(`Parent node with ID ${parentId} not found`);
    }
  }
  updateNode(nodeId: string, updatedNode: CategoryNode): void {
    const nodeToUpdate = this.findNodeById(this.categoryNode, nodeId);
    if (nodeToUpdate) {
      Object.assign(nodeToUpdate, updatedNode);
      this.categoryNodeSubject.next(cloneDeep(this.categoryNode));
    } else {
      throw new Error(`Node with ID ${nodeId} not found`);
    }
  }
  deleteNode(parentId: string, childId: string): void {
    if (parentId === "root" && childId === "root") {
      return this.categoryNodeSubject.next(cloneDeep(this.categoryNode));
    }
    if (parentId === this.categoryNode.id) {
      this.categoryNode.children = this.categoryNode.children.filter(
        (child) => child.id !== childId,
      );
      this.categoryNodeSubject.next(cloneDeep(this.categoryNode));
    } else {
      const parentNode = this.findNodeById(this.categoryNode, parentId);
      if (parentNode) {
        parentNode.children = parentNode.children.filter(
          (child) => child.id !== childId,
        );
        this.categoryNodeSubject.next(cloneDeep(this.categoryNode));
      } else {
        throw new Error(`Parent node with ID ${parentId} not found`);
      }
    }
  }
}
