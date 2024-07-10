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

  describe("Data Structure - easy to navigate whole, easy to find a node", () => {
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
            // "Category 5",
          ]);
          done();
        },
        error: (error) => {
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
});
