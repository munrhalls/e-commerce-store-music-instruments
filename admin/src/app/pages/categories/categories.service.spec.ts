import { TestBed } from "@angular/core/testing";
import { CategoriesService, CategoryNode } from "./categories.service";
import { cloneDeep } from "lodash";

describe("CategoriesService", () => {
  let service: CategoriesService;
  let categoryNode: CategoryNode;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesService],
    });
    service = TestBed.inject(CategoriesService);
    categoryNode = service.categoryNode;
  });

  it("should be created", () => {
    expect(service).toBeDefined();
  });

  it("Data Structure (DS) should have unique IDs across the entire structure", () => {
    const checkForDuplicateIds = function (
      node: CategoryNode,
      allIds = new Set<string>(),
    ): boolean {
      if (allIds.has(node.id)) return true;
      allIds.add(node.id);
      for (const child of node.children) {
        if (checkForDuplicateIds(child, allIds)) return true;
      }
      return false;
    };

    const hasDuplicates = checkForDuplicateIds(categoryNode);
    expect(hasDuplicates).toBe(false);
  });

  it("DS should not have circular references", () => {
    const checkForCircularReferences = function (
      node: CategoryNode,
      visitedNodes = new Set<string>(),
    ): void {
      if (visitedNodes.has(node.id)) {
        throw new Error("Circular reference detected");
      }

      visitedNodes.add(node.id);

      for (const child of node.children) {
        checkForCircularReferences(child, visitedNodes);
      }
    };

    expect(() => checkForCircularReferences(categoryNode)).not.toThrow();
  });

  it("DS should find a specific node by ID", () => {
    const nodeId = "2.1";
    const foundNode = service.findNodeById(categoryNode, nodeId);
    expect(foundNode).toBeDefined();
    expect(foundNode.id).toBe(nodeId);
  });

  it("should create a new node", () => {
    const newCategory: CategoryNode = {
      id: "3",
      parentId: "root",
      name: "Category 3",
      children: [],
    };
    service.createNode("root", newCategory);
    expect(service.findNodeById(categoryNode, "3")).toBeDefined();
  });

  it("should update an existing node", () => {
    const updatedCategory: CategoryNode = {
      id: "2.1",
      parentId: "2",
      name: "Updated Category 2.1",
      children: [],
    };
    service.updateNode("2.1", updatedCategory);
    const foundNode = service.findNodeById(categoryNode, "2.1");
    expect(foundNode).toBeDefined();
    expect(foundNode?.name).toBe("Updated Category 2.1");
  });

  it("delete - should throw an error when the parent node is not found", () => {
    expect(() => service.deleteNode("nonexistentId", "2.1")).toThrowError(
      "Parent node with ID nonexistentId not found",
    );
  });

  it("should delete a child node of the root", () => {
    service.deleteNode("root", "1");

    expect(service.findNodeById(categoryNode, "1")).toBeUndefined();
  });

  it("should delete root when it has no children", () => {
    const initialCategoryNode = cloneDeep(service.categoryNode);
    initialCategoryNode.children = [];
    service.categoryNode = initialCategoryNode;

    service.deleteNode("root", initialCategoryNode.id);

    expect(service.categoryNode).toEqual({
      id: "root",
      name: "",
      parentId: "root",
      children: [],
    });
  });
});
