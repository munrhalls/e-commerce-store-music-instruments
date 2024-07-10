import { setupTestBed } from "./categories.setup.spec";
import { categoryNode as mockCategoryNode } from "./categories.mock.spec";
import { HttpTestingController } from "@angular/common/http/testing";
import { expectCategoryNode } from "./categories.setup.spec";
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
    expectCategoryNode(service, httpMock, mockCategoryNode);
  });
});
