// import {CategoryTree} from "../../../../categories.model";
import { categoryTreeReducer } from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { CategoryTree } from "../../../../categories.model";
import { ErrorModel } from "../../../../../../@core/error-handler/error.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

describe("Category tree reducer", () => {
  it("should return initial state", () => {
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: false,
        error: null,
      },
    };

    expect(categoryTreeReducer(undefined, {} as any)).toEqual(expectedState);
  });
  it("should set loading state to true on api load action", () => {
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: true,
        error: null,
      },
    };

    expect(
      categoryTreeReducer(undefined, { type: "[Category Tree] API Load" }),
    ).toEqual(expectedState);
  });
  it("should set loading state to false and set category tree data on api load success action", () => {
    const expectedState = {
      categoryTree: {
        data: {
          id: "1",
          name: "Root",
          pathIds: [],
          children: [],
        },
        isLoading: false,
        error: null,
      },
    };

    expect(
      categoryTreeReducer(
        undefined,
        categoryTreeActions.apiLoadSuccess({
          categoryTree: {
            id: "1",
            name: "Root",
            pathIds: [],
            children: [],
          },
        }),
      ),
    ).toEqual(expectedState);
  });

  it("should set loading state to false and set error on api load error action", () => {
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: false,
        error: new ServerConnectionError(),
      },
    };

    expect(
      categoryTreeReducer(
        undefined,
        categoryTreeActions.apiLoadError({
          error: new ServerConnectionError(),
        }),
      ),
    ).toEqual(expectedState);
  });
});
