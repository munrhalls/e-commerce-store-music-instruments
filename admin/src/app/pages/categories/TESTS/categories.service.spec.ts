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

  describe("Local Storage persistance", () => {
    it("Local Storage persistance - should save categoryNode to localStorage, localStorage node should equal test service node", () => {
      service.saveCategoryNode(categoryNode);
      const storedCategoryNode = localStorage.getItem("categoryNode");
      expect(storedCategoryNode).toEqual(JSON.stringify(categoryNode));
    });

    it("Local Storage persistence - should load categoryNode from localStorage on initialization, categoryNode should equal test service node", (done) => {
      localStorage.setItem("categoryNode", JSON.stringify(categoryNode));
      service.loadCategoryNode();
      service.getCategoryNode().subscribe((categoryNodeSubscriptionValue) => {
        expect(categoryNodeSubscriptionValue).toEqual(categoryNode);
        done();
      });
    });

    it("Local Storage persistance - should reflect changes after an operation", async () => {
      let categoryNode = await service
        .getCategoryNode()
        .pipe(first())
        .toPromise();

      expect(categoryNode.children.length).toEqual(4);

      service.addCategoryToTarget([], "Category 5");
      const storedCategoryNode = JSON.parse(
        localStorage.getItem("categoryNode"),
      );
      categoryNode = await service.getCategoryNode().pipe(first()).toPromise();

      expect(categoryNode.children.length).toEqual(5);
      expect(storedCategoryNode.children.length).toEqual(5);
      expect(categoryNode.children.length).toEqual(5);
    });
  });

  describe("Data Structure works", () => {
    it("Data structure is a nested tree", (done) => {
      service.getCategoryNode().subscribe((categoryNode) => {
        expect(categoryNode.id).toEqual(IDs.root);
        expect(categoryNode.name).toEqual("root");
        expect(categoryNode.children[0].id).toEqual(IDs.IDcategory1);
        expect(categoryNode.children[1].id).toEqual(IDs.IDcategory2);
        expect(categoryNode.children[2].id).toEqual(IDs.IDcategory3);
        expect(categoryNode.children[3].id).toEqual(IDs.IDcategory4);

        const category2 = categoryNode.children[1];
        expect(category2.children[0].id).toEqual(IDs.IDcategory21);
        expect(category2.children[0].children[0].id).toEqual(IDs.IDcategory211);
        expect(categoryNode.children[1].pathIds).toEqual([IDs.IDcategory2]);
        expect(category2.children[0].children[0].pathIds).toEqual([
          IDs.IDcategory2,
          IDs.IDcategory21,
          IDs.IDcategory211,
        ]);

        done();
      });
    });

    it("Data Structure: recursion should output each category name in order", (done) => {
      service.getCategoryNode().subscribe({
        next: (categoryNode: CategoryNode) => {
          const names: string[] = [];
          function recursive(node: CategoryNode) {
            names.push(node.name);
            for (const child of node.children) {
              recursive(child);
            }
          }
          recursive(categoryNode);
          expect(names).toEqual([
            "root",
            "Category 1",
            "Category 2",
            "Category 2.1",
            "Category 2.1.1",
            "Category 3",
            "Category 3.1",
            "Category 4",
            "Category 4.1",
            "Category 4.2",
            "Category 4.3",
            "Category 4.4",
            "Category 4.5",
            "Category 5",
          ]);
          done();
        },
        error: (error) => {
          console.error(error);
          done();
        },
      });
    });

    it("findCategoryByPathIds - should find top-level category 2 by pathIds; matching id, pathIds and name", () => {
      let pathIds = [IDs.IDcategory2];
      let target = service.findCategoryByPathIds(pathIds);

      expect(target).toBeDefined();
      expect(target.id).toEqual(IDs.IDcategory2);
      expect(target.pathIds).toEqual(pathIds);
      expect(target.name).toEqual("Category 2");
    });

    it("findCategoryByPathIds - should find sub-category 2.1; matching id, pathIds and name", () => {
      let pathIds = [IDs.IDcategory2, IDs.IDcategory21];
      let target = service.findCategoryByPathIds(pathIds);

      expect(target).toBeDefined();
      expect(target.id).toEqual(IDs.IDcategory21);
      expect(target.pathIds).toEqual(pathIds);
      expect(target.name).toEqual("Category 2.1");
    });

    it("findCategoryByPathIds - should find sub-category 2.1.1; matching id, pathIds and name", () => {
      let pathIds = [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory211];
      let target = service.findCategoryByPathIds(pathIds);

      expect(target).toBeDefined();
      expect(target.id).toEqual(IDs.IDcategory211);
      expect(target.pathIds).toEqual(pathIds);
      expect(target.name).toEqual("Category 2.1.1");
    });
  });

  describe("Category CRUD / MOVE DOWN / MOVE UP operations", () => {
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
      const pathIds = [IDs.IDcategory4, IDs.IDcategory41];
      const target = service.findCategoryByPathIds(pathIds);
      const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
      const targetIndex = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory41,
      );
      service.moveTargetDown(pathIds);
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory41,
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
      const targetIndexAfter = parent.children.findIndex(
        (child) => child.id === IDs.IDcategory42,
      );
      expect(target).toBeDefined();
      expect(targetIndexAfter).toBeGreaterThanOrEqual(0);
      expect(targetIndexAfter).toEqual(targetIndex - 1);
    });
  });
});
