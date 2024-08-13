import { TestScheduler } from "rxjs/testing";
import { of, throwError } from "rxjs";
import { Actions } from "@ngrx/effects";
import { CategoryTreeEffects } from "../../category-tree.effects";
import { CategoriesService } from "../../../../../categories/categories.service";
import * as categoryTreeActions from "./../../category-tree.actions";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("READ", () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it("should return load success action on api success", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const mockAfterLoad = {
        id: "mock",
        name: "mock category",
        pathIds: ["mock"],
        children: [],
      };

      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiLoad(),
        }),
      );
      const mockCategoriesService = {
        fetchCategoryTree: jest.fn(() => of(mockAfterLoad)),
      } as unknown as CategoriesService;

      const effects = new CategoryTreeEffects(actions, mockCategoriesService);
      const expected = categoryTreeActions.apiLoadSuccess({
        categoryTree: mockAfterLoad,
      });

      expectObservable(effects.apiLoad$).toBe("-a", { a: expected });
    });
  });

  it("should return error action on api error", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiAdd({
            targetPathIds: ["1"],
            newCategory: {
              id: "1",
              name: "newCategory",
              pathIds: ["1"],
              children: [],
            },
          }),
        }),
      );

      const mockCategoriesService = {
        addCategory: jest.fn(() => {
          return throwError(() => new ServerConnectionError());
        }),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);
      const expected = categoryTreeActions.apiAddError({
        error: new ServerConnectionError(),
      });

      expectObservable(effects.apiAdd$).toBe("-a", { a: expected });
    });
  });
});
