import {
  categoryTreeReducer,
  CategoryTreeState,
} from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { CategoryTree } from "../../../../categories.model";

describe("READ", () => {
  let initialState: CategoryTreeState;
  let apiSuccessResMock: CategoryTree;
  let apiErrorResMock: string;
  let state: CategoryTreeState | undefined;
  let expectedState: CategoryTreeState;

  beforeEach(() => {
    state = undefined;
    apiSuccessResMock = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [
        {
          id: "mock",
          name: "mock",
          pathIds: ["root", "mock"],
          children: [],
        },
      ],
    };
    apiErrorResMock = "API error";
  });
  it("on api load action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiLoad();

    initialState = {
      data: null,
      isLoading: false,
      error: null,
    };

    state = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: null,
      isLoading: true,
      error: null,
    };

    expect(state).toEqual(expectedState);
  });

  it("on api load success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiLoadSuccess({
      categoryTree: apiSuccessResMock,
    });

    initialState = { data: null, isLoading: true, error: null };
    state = categoryTreeReducer(initialState, action);

    const expectedState = {
      data: apiSuccessResMock,
      isLoading: false,
      error: null,
    };
    expect(state).toEqual(expectedState);
  });

  it("on api load error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiLoadError({
      error: "API error",
    });
    initialState = {
      data: null,
      isLoading: true,
      error: null,
    };

    state = categoryTreeReducer(initialState, action);
    expectedState = {
      data: null,
      isLoading: false,
      error: "API error",
    };

    expect(state).toEqual(expectedState);
  });
});
