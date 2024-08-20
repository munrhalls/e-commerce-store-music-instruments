import {
  categoryTreeReducer,
  CategoryTreeState,
} from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { CategoryTree } from "../../../../categories.model";

let initialState: CategoryTreeState;
let apiSuccessResMock: CategoryTree;
let apiErrorResMock: string;
let state: CategoryTreeState | undefined;
let expectedState: CategoryTreeState;

describe("UPDATE NAME", () => {
  beforeEach(() => {
    state = undefined;
    apiSuccessResMock = {
      id: "1",
      name: "updated name",
      pathIds: ["1"],
      children: [],
    };
    apiErrorResMock = "API error";
  });

  it("on update name action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiUpdateName({
      targetPathIds: ["1"],
      name: "updated name",
    });
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

  it("on update name success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiUpdateNameSuccess({
      categoryTree: apiSuccessResMock,
    });
    initialState = {
      data: {
        id: "1",
        name: "not updated name",
        pathIds: ["1"],
        children: [],
      },
      isLoading: true,
      error: null,
    };
    state = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: apiSuccessResMock,
      isLoading: false,
      error: null,
    };

    expect(state).toEqual(expectedState);
  });
  it("on update name error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiUpdateNameError({
      error: "API error",
    });
    initialState = {
      data: null,
      isLoading: true,
      error: null,
    };
    state = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: null,
      isLoading: false,
      error: "API error",
    };

    expect(state).toEqual(expectedState);
  });
});
