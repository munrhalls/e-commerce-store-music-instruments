import { setupTestBed } from "./categories.setup.spec";
import { CategoryNode } from "../categories.service";
import { categoryNode as mockCategoryNode } from "./categories.mock.spec";
import { HttpTestingController } from "@angular/common/http/testing";

describe("CategoriesService", () => {
  let service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    ({ service, httpMock } = setupTestBed());
    service.ngOnInit();
  });
  afterEach(() => {
    httpMock.verify();
  });

  it("should fetch categories on init", () => {
    const req = httpMock.expectOne("/api/categories");
    expect(req.request.method).toBe("GET");
    req.flush(mockCategoryNode);

    service.getCategoryNode().subscribe((node) => {
      expect(node).toEqual(mockCategoryNode);
      console.log(node);
    });
  });
});
