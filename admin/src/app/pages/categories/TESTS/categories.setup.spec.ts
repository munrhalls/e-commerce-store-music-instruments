import { TestBed } from "@angular/core/testing";
import { CategoriesService, CategoryNode } from "../categories.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

export const setupTestBed = function (categoryNode: CategoryNode) {
  TestBed.configureTestingModule({
    providers: [
      {
        provide: CategoriesService,
        useFactory: () => new CategoriesService(categoryNode),
      },
    ],
  });
  return TestBed.inject(CategoriesService);
};
