import { setupTestBed } from "./categories.setup.spec";
import {
  categoryNode as mockCategoryNode,
  IDs,
} from "./categories.mock-data.spec";
import { expectCategoryNode } from "./categories.setup.spec";
import { HttpTestingController } from "@angular/common/http/testing";
import { CategoriesService, CategoryNode } from "../categories.service";
import { first } from "rxjs/operators";

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

  describe("Local Storage persistance", () => {
    it("Local Storage persistance - should save categoryNode to localStorage, localStorage node should equal test service node", () => {
      service.saveCategoryNode(mockCategoryNode);
      const storedCategoryNode = localStorage.getItem("categoryNode");
      expect(storedCategoryNode).toEqual(JSON.stringify(mockCategoryNode));
    });

    it("Local Storage persistence - should load categoryNode from localStorage on initialization, categoryNode should equal test service node", (done) => {
      localStorage.setItem("categoryNode", JSON.stringify(mockCategoryNode));
      service.loadCategoryNode();
      service.getCategoryNode$().subscribe((categoryNodeSubscriptionValue) => {
        expect(categoryNodeSubscriptionValue).toEqual(mockCategoryNode);
        done();
      });
    });

    it("Local Storage persistance - should reflect changes after an operation", async () => {
      let categoryNode: CategoryNode = await service
        .getCategoryNode$()
        .pipe(first())
        .toPromise();

      expect(categoryNode.children.length).toEqual(4);

      service.addCategoryToTarget([], "Category 5");
      const storedCategoryNode = JSON.parse(
        localStorage.getItem("categoryNode"),
      );
      categoryNode = await service.getCategoryNode$().pipe(first()).toPromise();

      expect(categoryNode.children.length).toEqual(5);
      expect(storedCategoryNode.children.length).toEqual(5);
      expect(categoryNode.children.length).toEqual(5);
    });
  });
});
