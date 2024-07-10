import { setupTestBed } from "./categories.setup.spec";
import { CategoriesService, CategoryNode } from "../categories.service";
import { first } from "rxjs/operators";
import { categoryNode, IDs } from "./categories.mock.spec";

describe("CategoriesService", () => {
  let service: CategoriesService;

  beforeEach(() => {
    service = setupTestBed(categoryNode);
  });

  it("CategoriesService - should be created", () => {
    expect(service).toBeDefined();
  });

  describe("Categories CRUD, MOVE UP, MOVE DOWN", () => {
    it("addCategoryToTarget - should add a subcategory to a target top-level category", () => {
      const pathIds = [IDs.IDcategory2];
      const name = "2.2";
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildrenLength = target.children.length;

      service.addCategoryToTarget(pathIds, name);
      expect(target.children.length).toEqual(targetChildrenLength + 1);
      const newlyAdded = target.children.find((child) => child.name === name);
      expect(newlyAdded).toBeDefined();
      expect(newlyAdded.id).toBeDefined();
      expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
      expect(newlyAdded.name).toEqual(name);
      expect(newlyAdded.children).toEqual([]);
    });
    it("addCategoryToTarget - should add a subcategory to a target sub-category", () => {
      const pathIds = [IDs.IDcategory2, IDs.IDcategory21];
      const name = "2.1.2";
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildrenLength = target.children.length;

      service.addCategoryToTarget(pathIds, name);
      expect(target.children.length).toEqual(targetChildrenLength + 1);
      const newlyAdded = target.children.find((child) => child.name === name);
      expect(newlyAdded).toBeDefined();
      expect(newlyAdded.id).toBeDefined();
      expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
      expect(newlyAdded.name).toEqual(name);
      expect(newlyAdded.children).toEqual([]);
    });
    it("addCategoryToTarget - should add a subcategory to a target sub-sub-category", () => {
      const pathIds = [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory211];
      const name = "2.1.2.1";
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildrenLength = target.children.length;

      service.addCategoryToTarget(pathIds, name);
      expect(target.children.length).toEqual(targetChildrenLength + 1);
      const newlyAdded = target.children.find((child) => child.name === name);
      expect(newlyAdded).toBeDefined();
      expect(newlyAdded.id).toBeDefined();
      expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
      expect(newlyAdded.name).toEqual(name);
      expect(newlyAdded.children).toEqual([]);
    });

    it("updateTargetName - should update a target top-level category and preserve deep equality of children", () => {
      const pathIds = [IDs.IDcategory2];
      const newName = "Category 2 Updated";
      const target = service.findCategoryByPathIds(pathIds);
      const children = target.children;
      expect(target.children).toEqual(children);
      service.updateTargetName(pathIds, newName);
      const targetAfterUpdate = service.findCategoryByPathIds(pathIds);
      expect(target.name).toEqual(newName);
      expect(target.children).toEqual(children);

      function testDeepEqualityOfChildren(
        node1: CategoryNode,
        node2: CategoryNode,
      ): boolean {
        if (node1.children.length !== node2.children.length) {
          return false;
        }
        for (let i = 0; i < node1.children.length; i++) {
          if (
            !testDeepEqualityOfChildren(node1.children[i], node2.children[i])
          ) {
            return false;
          }
        }
        return true;
      }

      expect(testDeepEqualityOfChildren(target, targetAfterUpdate)).toBe(true);
    });
    it("deleteTarget - should delete a target and all its children", () => {
      const pathIds = [IDs.IDcategory2];
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildren = target.children;
      const deletedPathIds: string[] = [];
      function storeChildrenPathIds(node: CategoryNode) {
        deletedPathIds.push(...node.pathIds);
        for (const child of node.children) {
          storeChildrenPathIds(child);
        }
      }
      storeChildrenPathIds(target);

      service.deleteTarget(pathIds);
      const targetAfterDelete = service.findCategoryByPathIds(pathIds);
      expect(targetAfterDelete).toBeUndefined();
      expect(target.children).toEqual(targetChildren);
      for (const pathId of deletedPathIds) {
        const deletedCategory = service.findCategoryByPathIds([pathId]);
        expect(deletedCategory).toBeUndefined();
      }
    });

    it("moveTargetDown - should not move a target position down if it is the last child in the parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory45];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory45,
      );
      service.moveTargetDown(pathIds);
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory45,
      );
      expect(target).toBeDefined();
      expect(targetIndexAfter).toEqual(targetIndex);
    });

    it("moveTargetDown - should move a target position down (index to the right in the children array) by one, within the same parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory43];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory43,
      );
      service.moveTargetDown(pathIds);
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory43,
      );
      expect(target).toBeDefined();
      expect(targetIndexAfter).toBeLessThan(parent.children.length);
      expect(targetIndexAfter).toEqual(targetIndex + 1);
    });
    it("moveTargetUp - should not move a target position up if it is the first child in the parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory41];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory41,
      );
      service.moveTargetUp(pathIds);
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory41,
      );
      expect(target).toBeDefined();
      expect(targetIndexAfter).toEqual(targetIndex);
    });
    it("moveTargetUp - should move a target position up (index to the left in the children array) by one, within the same parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory42];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory42,
      );

      service.moveTargetUp(pathIds);
      expect(target).toBeDefined();
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory42,
      );
      expect(targetIndexAfter).toBeGreaterThanOrEqual(0);
      expect(targetIndexAfter).toEqual(targetIndex - 1);
    });
  });
});
