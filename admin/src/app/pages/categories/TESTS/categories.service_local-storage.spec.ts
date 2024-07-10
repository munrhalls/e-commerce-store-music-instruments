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
});
