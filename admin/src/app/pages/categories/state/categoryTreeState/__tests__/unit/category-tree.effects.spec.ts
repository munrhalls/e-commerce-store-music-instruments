import { TestBed } from "@angular/core/testing";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { mockActions } from "@ngrx/effects/testing";

beforeEach(() => {
  let categoryTreeEffects = new CategoryTreeEffects();
  TestBed.configureTestingModule({
    providers: [CategoryTreeEffects],
  });
});

// TL;DR: CategoryTreeEffects actions input/output handles categoryTree load logic properly
describe("CategoryTreeEffects should perform sequential logic steps to load categoryTree and each step should correspond to right action input trigger, and right action output with right payload", () => {
  it("should load CategoryTree from LocalStorage", () => {});
});
