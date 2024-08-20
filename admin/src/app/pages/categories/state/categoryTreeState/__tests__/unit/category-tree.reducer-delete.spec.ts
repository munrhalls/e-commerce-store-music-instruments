import {
  categoryTreeReducer,
  CategoryTreeState,
} from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("DELETE", () => {
  it("on delete action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiDelete({
      targetPathIds: ["1"],
    });
    const initialState: CategoryTreeState = {
      data: {
        id: "1",
        name: "newCategory",
        pathIds: ["1"],
        children: [],
      },
      isLoading: false,
      error: null,
    };
    const state: CategoryTreeState = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: {
        id: "1",
        name: "newCategory",
        pathIds: ["1"],
        children: [],
      },
      isLoading: true,
      error: null,
    };

    expect(state).toEqual(expectedState);
  });
  it("on delete success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiDeleteSuccess({
      categoryTree: null,
    });
    const initialState: CategoryTreeState = {
      data: {
        id: "1",
        name: "entire state obj",
        pathIds: ["1"],
        children: [],
      },
      isLoading: true,
      error: null,
    };
    const state: CategoryTreeState = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: null,
      isLoading: false,
      error: null,
    };

    expect(state).toEqual(expectedState);
  });
  it("on delete error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiDeleteError({
      error: "API error",
    });
    const initialState: CategoryTreeState = {
      data: {
        id: "1",
        name: "entire state obj",
        pathIds: ["1"],
        children: [],
      },
      isLoading: true,
      error: null,
    };
    const state: CategoryTreeState = categoryTreeReducer(initialState, action);
    const expectedState = {
      data: {
        id: "1",
        name: "entire state obj",
        pathIds: ["1"],
        children: [],
      },
      isLoading: false,
      error: "API error",
    };

    expect(state).toEqual(expectedState);
  });
});
