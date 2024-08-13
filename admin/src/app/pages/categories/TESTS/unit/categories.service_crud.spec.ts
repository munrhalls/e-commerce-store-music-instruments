import { setupTestBed } from "./categories.setup.spec";
import {
  CategoryTree as mockCategoryTree,
  IDs,
} from "./categories.mock-data.spec";
import { expectCategoryTree } from "./categories.setup.spec";
import { HttpTestingController } from "@angular/common/http/testing";
import { CategoriesService, CategoryTree } from "../../categories.service";

describe("CategoriesService", () => {
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    ({ service, httpMock } = setupTestBed());
    service.ngOnInit();
  });
  afterEach(() => {
    httpMock.verify();
  });

  it("should fetch categories on init", () => {
    expect(service).toBeDefined();
    expectCategoryTree(service, httpMock, mockCategoryTree);
  });

  describe("Categories CRUD, MOVE UP, MOVE DOWN", () => {
    it("addCategory - should add a subcategory to a target top-level category", () => {
      const pathIds = [IDs.IDcategory2];
      const name = "2.2";
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildrenLength = target.children.length;

      service.addCategory(pathIds, name);
      expect(target.children.length).toEqual(targetChildrenLength + 1);
      const newlyAdded = target.children.find((child) => child.name === name);
      expect(newlyAdded).toBeDefined();
      expect(newlyAdded.id).toBeDefined();
      expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
      expect(newlyAdded.name).toEqual(name);
      expect(newlyAdded.children).toEqual([]);
    });
    it("addCategory - should add a subcategory to a target sub-category", () => {
      const pathIds = [IDs.IDcategory2, IDs.IDcategory21];
      const name = "2.1.2";
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildrenLength = target.children.length;

      service.addCategory(pathIds, name);
      expect(target.children.length).toEqual(targetChildrenLength + 1);
      const newlyAdded = target.children.find((child) => child.name === name);
      expect(newlyAdded).toBeDefined();
      expect(newlyAdded.id).toBeDefined();
      expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
      expect(newlyAdded.name).toEqual(name);
      expect(newlyAdded.children).toEqual([]);
    });
    it("addCategory - should add a subcategory to a target sub-sub-category", () => {
      const pathIds = [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory211];
      const name = "2.1.2.1";
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildrenLength = target.children.length;

      service.addCategory(pathIds, name);
      expect(target.children.length).toEqual(targetChildrenLength + 1);
      const newlyAdded = target.children.find((child) => child.name === name);
      expect(newlyAdded).toBeDefined();
      expect(newlyAdded.id).toBeDefined();
      expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
      expect(newlyAdded.name).toEqual(name);
      expect(newlyAdded.children).toEqual([]);
    });

    it("updateName - should update a target top-level category and preserve deep equality of children", () => {
      const pathIds = [IDs.IDcategory2];
      const newName = "Category 2 Updated";
      const target = service.findCategoryByPathIds(pathIds);
      const children = target.children;
      expect(target.children).toEqual(children);
      service.updateName(pathIds, newName);
      const targetAfterUpdate = service.findCategoryByPathIds(pathIds);
      expect(target.name).toEqual(newName);
      expect(target.children).toEqual(children);

      function testDeepEqualityOfChildren(
        node1: CategoryTree,
        node2: CategoryTree,
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
    it("deleteCategory - should delete a target and all its children", () => {
      const pathIds = [IDs.IDcategory2];
      const target = service.findCategoryByPathIds(pathIds);
      const targetChildren = target.children;
      const deletedPathIds: string[] = [];
      function storeChildrenPathIds(node: CategoryTree) {
        deletedPathIds.push(...node.pathIds);
        for (const child of node.children) {
          storeChildrenPathIds(child);
        }
      }
      storeChildrenPathIds(target);

      service.deleteCategory(pathIds);
      const targetAfterDelete = service.findCategoryByPathIds(pathIds);
      expect(targetAfterDelete).toBeUndefined();
      expect(target.children).toEqual(targetChildren);
      for (const pathId of deletedPathIds) {
        const deletedCategory = service.findCategoryByPathIds([pathId]);
        expect(deletedCategory).toBeUndefined();
      }
    });

    it("moveCategoryDown - should not move a target position down if it is the last child in the parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory45];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory45,
      );
      service.moveCategoryDown(pathIds);
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory45,
      );
      expect(target).toBeDefined();
      expect(targetIndexAfter).toEqual(targetIndex);
    });

    it("moveCategoryDown - should move a target position down (index to the right in the children array) by one, within the same parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory43];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory43,
      );
      service.moveCategoryDown(pathIds);
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory43,
      );
      expect(target).toBeDefined();
      expect(targetIndexAfter).toBeLessThan(parent.children.length);
      expect(targetIndexAfter).toEqual(targetIndex + 1);
    });
    it("moveCategoryUp - should not move a target position up if it is the first child in the parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory41];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory41,
      );
      service.moveCategoryUp(pathIds);
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory41,
      );
      expect(target).toBeDefined();
      expect(targetIndexAfter).toEqual(targetIndex);
    });
    it("moveCategoryUp - should move a target position up (index to the left in the children array) by one, within the same parent", () => {
      const pathIds = [IDs.IDcategory4, IDs.IDcategory42];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory42,
      );

      service.moveCategoryUp(pathIds);
      expect(target).toBeDefined();
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory42,
      );
      expect(targetIndexAfter).toBeGreaterThanOrEqual(0);
      expect(targetIndexAfter).toEqual(targetIndex - 1);
    });
  });
});
