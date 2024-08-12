import { categoryTreeReducer, State } from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("CREATE", () => {
  it("on create action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiAdd({
      targetPathIds: ["1"],
      newCategory: {
        id: "1",
        name: "newCategory",
        pathIds: ["1"],
        children: [],
      },
    });
    const initialState: State = {
      categoryTree: { data: null, isLoading: false, error: null },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: { data: null, isLoading: true, error: null },
    };

    expect(state).toEqual(expectedState);
  });
  it("on create success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiAddSuccess({
      categoryTree: {
        id: "1",
        name: "newCategory",
        pathIds: ["1"],
        children: [],
      },
    });
    const initialState: State = {
      categoryTree: { data: null, isLoading: true, error: null },
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
        isLoading: false,
        error: null,
      },
    };

    expect(state).toEqual(expectedState);
  });
  it("on create error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiAddError({
      error: new ServerConnectionError(),
    });
    const initialState: State = {
      categoryTree: { data: null, isLoading: true, error: null },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: false,
        error: new ServerConnectionError(),
      },
    };

    expect(state).toEqual(expectedState);
  });
});
