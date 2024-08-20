import {
  categoryTreeReducer,
  CategoryTreeState,
} from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { CategoryTree } from "../../../../categories.model";

describe("CREATE", () => {
  let newCategory: CategoryTree;
  let apiSuccessResMock: CategoryTree;
  let apiErrorResMock: string;
  let initialState: CategoryTreeState;

  beforeEach(() => {
    newCategory = {
      id: "1",
      name: "newCategory",
      pathIds: ["1"],
      children: [],
    };
    apiSuccessResMock = {
      id: "1",
      name: "newCategory",
      pathIds: ["1"],
      children: [
        {
          id: "2",
          name: "newCategory",
          pathIds: ["1", "2"],
          children: [],
        },
      ],
    };
    apiErrorResMock = "API error";

    initialState = {
      data: null,
      isLoading: false,
      error: null,
    };
  });
  it("on create action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiAdd({
      targetPathIds: null,
      newCategory,
    });

    const state: CategoryTreeState = categoryTreeReducer(initialState, action);
    const expectedState = { data: null, isLoading: true, error: null };

    expect(state).toEqual(expectedState);
  });

  it("on create success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiAddSuccess({
      categoryTree: apiSuccessResMock,
    });
    const initialState: CategoryTreeState = {
      data: null,
      isLoading: true,
      error: null,
    };
    const state: CategoryTreeState = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: apiSuccessResMock,
      isLoading: false,
      error: null,
    };

    expect(state).toEqual(expectedState);
  });

  it("on create error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiAddError({
      error: "API error",
    });

    initialState = {
      data: null,
      isLoading: true,
      error: null,
    };

    const state: CategoryTreeState = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: null,
      isLoading: false,
      error: "API error",
    };

    expect(state).toEqual(expectedState);
  });
});
