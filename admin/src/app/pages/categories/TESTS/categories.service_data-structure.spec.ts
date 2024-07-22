import { setupTestBed } from "./categories.setup.spec";
import {
  CategoryTree as mockCategoryTree,
  IDs,
} from "./categories.mock-data.spec";
import { expectCategoryTree } from "./categories.setup.spec";
import { HttpTestingController } from "@angular/common/http/testing";
import { CategoriesService, CategoryTree } from "../categories.service";
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

  describe("Data Structure - easy to navigate whole, easy to find a node", () => {
    it("Data structure is a nested tree", (done) => {
      service.getCategoryTree().subscribe((CategoryTree) => {
        expect(CategoryTree.id).toEqual(IDs.root);
        expect(CategoryTree.name).toEqual("root");
        expect(CategoryTree.children[0].id).toEqual(IDs.IDcategory1);
        expect(CategoryTree.children[1].id).toEqual(IDs.IDcategory2);
        expect(CategoryTree.children[2].id).toEqual(IDs.IDcategory3);
        expect(CategoryTree.children[3].id).toEqual(IDs.IDcategory4);

        const category2 = CategoryTree.children[1];
        expect(category2.children[0].id).toEqual(IDs.IDcategory21);
        expect(category2.children[0].children[0].id).toEqual(IDs.IDcategory211);
        expect(CategoryTree.children[1].pathIds).toEqual([IDs.IDcategory2]);
        expect(category2.children[0].children[0].pathIds).toEqual([
          IDs.IDcategory2,
          IDs.IDcategory21,
          IDs.IDcategory211,
        ]);

        done();
      });
    });

    it("Data Structure: recursion should output each category name in order", (done) => {
      service.getCategoryTree().subscribe({
        next: (CategoryTree: CategoryTree) => {
          const names: string[] = [];
          let counter = 0;
          function recursive(node: CategoryTree, counter) {
            if (counter > 1500) {
              return;
            }
            names.push(node.name);
            for (const child of node.children) {
              recursive(child, counter);
            }
            counter++;
          }
          recursive(CategoryTree, counter);
          console.log(names);
          expect(names.length).toBeGreaterThan(50);

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
