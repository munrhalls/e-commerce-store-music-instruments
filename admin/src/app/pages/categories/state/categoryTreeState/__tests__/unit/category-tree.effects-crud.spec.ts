import { CategoryTreeEffects } from "../../category-tree.effects";
import { Actions } from "@ngrx/effects";
import { CategoriesService } from "../../../../../categories/categories.service";
import { CategoryTree } from "../../../../../categories/categories.model";
import { TestScheduler } from "rxjs/testing";
import { of, throwError } from "rxjs";
import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import * as categoryTreeActions from "../../category-tree.actions";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("basic setup should work", () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  it("should return error when api service throws error, should return success with payload when api service returns success", () => {
    testScheduler.run((helpers) => {
      const categoryTree: CategoryTree = {
        id: "1",
        name: "Root",
        pathIds: [],
        children: [],
      };

      const mockCategoriesService = {
        fetchCategoryTree: () =>
          throwError("some error any whatsoever asdfghjkl"),
      } as unknown as CategoriesService;

      const actions$ = helpers.hot("-a", { a: categoryTreeActions.apiLoad() });
      const expectedMarble = "-b";
      const expectedEmissions = {
        b: categoryTreeActions.apiLoadError({
          error: new ServerConnectionError(),
        }),
      };
      const categoryTreeEffects = new CategoryTreeEffects(
        actions$,
        mockCategoriesService,
      );

      helpers
        .expectObservable(categoryTreeEffects.apiLoadCategoryTree$)
        .toBe(expectedMarble, expectedEmissions);
    });
  });
});
