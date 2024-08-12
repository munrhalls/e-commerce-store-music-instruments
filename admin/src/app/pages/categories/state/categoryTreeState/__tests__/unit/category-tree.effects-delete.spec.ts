import { TestScheduler } from "rxjs/testing";
import { of, throwError } from "rxjs";
import { Actions } from "@ngrx/effects";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { CategoriesService } from "../../../../categories.service";
import * as categoryTreeActions from "../../category-tree.actions";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

let testScheduler: TestScheduler;

beforeEach(() => {
  testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});

describe("DELETE", () => {
  it("should return success action on api delete success", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const mockAfterDelete = null;
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiDelete({
            targetPathIds: ["mock 2"],
          }),
        }),
      );
      const mockCategoriesService = {
        deleteCategory: jest.fn(() => of(mockAfterDelete)),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiDeleteSuccess({
        categoryTree: mockAfterDelete,
      });
      expectObservable(effects.apiDelete$).toBe("-a", { a: expected });
    });
  });

  it("should return error action on api delete error", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiDelete({
            targetPathIds: ["mock 2"],
          }),
        }),
      );
      const mockCategoriesService = {
        deleteCategory: jest.fn(() => throwError(new ServerConnectionError())),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiDeleteError({
        error: new ServerConnectionError(),
      });
      expectObservable(effects.apiDelete$).toBe("-a", { a: expected });
    });
  });
});
