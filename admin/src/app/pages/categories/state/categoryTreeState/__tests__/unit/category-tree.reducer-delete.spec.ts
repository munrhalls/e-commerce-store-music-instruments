import { categoryTreeReducer, State } from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("DELETE", () => {
  it("on delete action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiDelete({
      targetPathIds: ["1"],
    });
    const initialState: State = {
      categoryTree: {
        data: {
          id: "1",
          name: "newCategory",
          pathIds: ["1"],
          children: [],
        },
        isLoading: false,
        error: null,
      },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: {
        data: {
          id: "1",
          name: "newCategory",
          pathIds: ["1"],
          children: [],
        },
        isLoading: true,
        error: null,
      },
    };

    expect(state).toEqual(expectedState);
  });
  it("on delete success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiDeleteSuccess({
      categoryTree: null,
    });
    const initialState: State = {
      categoryTree: {
        data: {
          id: "1",
          name: "entire state obj",
          pathIds: ["1"],
          children: [],
        },
        isLoading: true,
        error: null,
      },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: false,
        error: null,
      },
    };

    expect(state).toEqual(expectedState);
  });
  it("on delete error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiDeleteError({
      error: new ServerConnectionError(),
    });
    const initialState: State = {
      categoryTree: {
        data: {
          id: "1",
          name: "entire state obj",
          pathIds: ["1"],
          children: [],
        },
        isLoading: true,
        error: null,
      },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: {
        data: {
          id: "1",
          name: "entire state obj",
          pathIds: ["1"],
          children: [],
        },
        isLoading: false,
        error: new ServerConnectionError(),
      },
    };

    expect(state).toEqual(expectedState);
  });
});
