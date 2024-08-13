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

describe("UPDATE NAME", () => {
  it("should return success action on api update name success", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const mockAfterUpdate = {
        id: "mock",
        name: "updated name",
        pathIds: ["mock"],
        children: [],
      };
      const apiPayload = {
        targetPathIds: ["mock"],
        name: "updated name",
      };
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiUpdateName({
            targetPathIds: apiPayload.targetPathIds,
            name: apiPayload.name,
          }),
        }),
      );
      const mockCategoriesService = {
        updateName: jest.fn(() => of(mockAfterUpdate)),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiUpdateNameSuccess({
        categoryTree: mockAfterUpdate,
      });
      expectObservable(effects.apiUpdateName$).toBe("-a", { a: expected });
    });
  });

  it("should return error action on api update name error", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const apiPayload = {
        targetPathIds: ["mock"],
        name: "updated name",
      };
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiUpdateName({
            targetPathIds: apiPayload.targetPathIds,
            name: apiPayload.name,
          }),
        }),
      );

      const mockCategoriesService = {
        updateName: jest.fn(() => {
          return throwError(() => new ServerConnectionError());
        }),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiUpdateNameError({
        error: new ServerConnectionError(),
      });
      expectObservable(effects.apiUpdateName$).toBe("-a", { a: expected });
    });
  });
});

describe("UPDATE MOVE DOWN", () => {
  it("should return success action on api move down success", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const mockAfterMoveDown = {
        id: "mock",
        name: "mock category",
        pathIds: ["mock"],
        children: [],
      };
      const apiPayload = {
        targetPathIds: ["mock"],
      };
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiMoveDown({
            targetPathIds: apiPayload.targetPathIds,
          }),
        }),
      );
      const mockCategoriesService = {
        moveCategoryDown: jest.fn(() => of(mockAfterMoveDown)),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiMoveDownSuccess({
        categoryTree: mockAfterMoveDown,
      });
      expectObservable(effects.apiMoveDown$).toBe("-a", { a: expected });
    });
  });

  it("should return error action on api move down error", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const apiPayload = {
        targetPathIds: ["mock"],
      };
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiMoveDown({
            targetPathIds: apiPayload.targetPathIds,
          }),
        }),
      );

      const mockCategoriesService = {
        moveCategoryDown: jest.fn(() => {
          return throwError(() => new ServerConnectionError());
        }),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiMoveDownError({
        error: new ServerConnectionError(),
      });
      expectObservable(effects.apiMoveDown$).toBe("-a", { a: expected });
    });
  });
});

describe("UPDATE MOVE UP", () => {
  it("should return success action on api move up success", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const mockAfterMoveUp = {
        id: "mock",
        name: "mock category",
        pathIds: ["mock"],
        children: [],
      };
      const apiPayload = {
        targetPathIds: ["mock"],
      };
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiMoveUp({
            targetPathIds: apiPayload.targetPathIds,
          }),
        }),
      );
      const mockCategoriesService = {
        moveCategoryUp: jest.fn(() => of(mockAfterMoveUp)),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiMoveUpSuccess({
        categoryTree: mockAfterMoveUp,
      });
      expectObservable(effects.apiMoveUp$).toBe("-a", { a: expected });
    });
  });

  it("should return error action on api move up error", () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const apiPayload = {
        targetPathIds: ["mock"],
      };
      const actions = new Actions(
        hot("-a", {
          a: categoryTreeActions.apiMoveUp({
            targetPathIds: apiPayload.targetPathIds,
          }),
        }),
      );

      const mockCategoriesService = {
        moveCategoryUp: jest.fn(() => {
          return throwError(() => new ServerConnectionError());
        }),
      } as unknown as CategoriesService;
      const effects = new CategoryTreeEffects(actions, mockCategoriesService);

      const expected = categoryTreeActions.apiMoveUpError({
        error: new ServerConnectionError(),
      });
      expectObservable(effects.apiMoveUp$).toBe("-a", { a: expected });
    });
  });
});
