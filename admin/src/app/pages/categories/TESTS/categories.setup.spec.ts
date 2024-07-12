import { TestBed } from "@angular/core/testing";
import { CategoriesService, CategoryNode } from "../categories.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

export const setupTestBed = function () {
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CategoriesService],
  });
  service = TestBed.inject(CategoriesService);
  httpMock = TestBed.inject(HttpTestingController);
  return { service, httpMock };
};

export const expectCategoryNode = function (
  service: CategoriesService,
  httpMock: HttpTestingController,
  expectedNode: CategoryNode,
) {
  const req = httpMock.expectOne("/api/categories");
  expect(req.request.method).toBe("GET");
  req.flush(expectedNode);

  service.getCategoryNode$().subscribe((node) => {
    expect(node).toEqual(expectedNode);
    console.log(node);
  });
};
