import { setupTestBed } from "./categories.setup.spec";
import { categoryNode as mockCategoryNode, IDs } from "./categories.mock.spec";
import { expectCategoryNode } from "./categories.setup.spec";
import { HttpTestingController } from "@angular/common/http/testing";
import { CategoriesService, CategoryNode } from "../categories.service";
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
    expectCategoryNode(service, httpMock, mockCategoryNode);
  });

  describe("Data Structure - easy to navigate whole, easy to find a node", () => {
    it("Data structure is a nested tree", (done) => {
      service.getCategoryNode$().subscribe((categoryNode) => {
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
      service.getCategoryNode$().subscribe({
        next: (categoryNode: CategoryNode) => {
          const names: string[] = [];
          let counter = 0;
          function recursive(node: CategoryNode, counter) {
            if (counter > 1500) {
              return;
            }
            names.push(node.name);
            for (const child of node.children) {
              recursive(child, counter);
            }
            counter++;
          }
          recursive(categoryNode, counter);
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
