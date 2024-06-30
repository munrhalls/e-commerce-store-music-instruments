import { TestBed } from "@angular/core/testing";
import { CategoriesService } from "./categories.service";

describe("CategoriesService", () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesService],
    });
    service = TestBed.inject(CategoriesService);
  });

  it("should be created", () => {
    expect(service).toBeDefined();
  });

  it("should output categories tree via recursive function", () => {});
});
