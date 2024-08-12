import { Subject } from "rxjs";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { Action } from "@ngrx/store";

describe("All effects needed for CREATE, READ, UPDATE, MOVE DOWN, MOVE UP, DELETE, should exist (6)", () => {
  let actions$: Subject<Action> = new Subject<Action>();
  let mockCategoriesService = null;

  const categoryTreeEffects = new CategoryTreeEffects(
    actions$,
    mockCategoriesService,
  );

  it("api load category tree effect should exist", () => {
    expect(categoryTreeEffects.apiLoad$).toBeDefined();
  });
  it("api create new category effect should exist", () => {
    expect(categoryTreeEffects.apiAdd$).toBeDefined();
  });
  it("api update category name effect should exist", () => {
    expect(categoryTreeEffects.apiUpdateName$).toBeDefined();
  });
  it("api move down effect should exist", () => {
    expect(categoryTreeEffects.apiMoveDown$).toBeDefined();
  });
  it("api move up effect should exist", () => {
    expect(categoryTreeEffects.apiMoveUp$).toBeDefined();
  });
  it("api delete category effect should exist", () => {
    expect(categoryTreeEffects.apiDelete$).toBeDefined();
  });
});
