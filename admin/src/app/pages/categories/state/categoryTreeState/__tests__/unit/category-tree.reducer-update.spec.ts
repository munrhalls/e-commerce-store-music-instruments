import { categoryTreeReducer, State } from "../../category-tree.reducer";
import * as categoryTreeActions from "../../category-tree.actions";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("UPDATE NAME", () => {
  it("on update name action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiUpdateName({
      targetPathIds: ["1"],
      name: "updated name",
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
  it("on update name success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiUpdateNameSuccess({
      categoryTree: {
        id: "1",
        name: "updated name updated name updated name updated name",
        pathIds: ["1"],
        children: [],
      },
    });
    const initialState: State = {
      categoryTree: {
        data: {
          id: "1",
          name: "not updated name",
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
          name: "updated name updated name updated name updated name",
          pathIds: ["1"],
          children: [],
        },
        isLoading: false,
        error: null,
      },
    };

    expect(state).toEqual(expectedState);
  });
  it("on update name error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiUpdateNameError({
      error: "API error",
    });
    const initialState: State = {
      categoryTree: { data: null, isLoading: true, error: null },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: false,
        error: "API error",
      },
    };

    expect(state).toEqual(expectedState);
  });
});

describe("UPDATE MOVE DOWN", () => {
  it("on update move down action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiMoveDown({
      targetPathIds: ["1"],
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
  it("on update move down success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiMoveDownSuccess({
      categoryTree: {
        id: "1",
        name: "mock mv",
        pathIds: ["1"],
        children: [],
      },
    });
    const initialState: State = {
      categoryTree: {
        data: {
          id: "1",
          name: "mock mv",
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
          name: "mock mv",
          pathIds: ["1"],
          children: [],
        },
        isLoading: false,
        error: null,
      },
    };

    expect(state).toEqual(expectedState);
  });
  it("on update move down error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiMoveDownError({
      error: "API error",
    });
    const initialState: State = {
      categoryTree: { data: null, isLoading: true, error: null },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: false,
        error: "API error",
      },
    };

    expect(state).toEqual(expectedState);
  });
});

describe("UPDATE MOVE UP", () => {
  it("on update move up action, should set isLoading to true", () => {
    const action = categoryTreeActions.apiMoveUp({
      targetPathIds: ["1"],
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
  it("on update move up success action, should set isLoading to false and set categoryTree data", () => {
    const action = categoryTreeActions.apiMoveUpSuccess({
      categoryTree: {
        id: "1",
        name: "mock mv",
        pathIds: ["1"],
        children: [],
      },
    });
    const initialState: State = {
      categoryTree: {
        data: {
          id: "1",
          name: "mock mv",
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
          name: "mock mv",
          pathIds: ["1"],
          children: [],
        },
        isLoading: false,
        error: null,
      },
    };

    expect(state).toEqual(expectedState);
  });
  it("on update move up error action, should set isLoading to false and set error", () => {
    const action = categoryTreeActions.apiMoveUpError({
      error: "API error",
    });
    const initialState: State = {
      categoryTree: { data: null, isLoading: true, error: null },
    };
    const state: State = categoryTreeReducer(initialState, action);
    const expectedState = {
      categoryTree: {
        data: null,
        isLoading: false,
        error: "API error",
      },
    };

    expect(state).toEqual(expectedState);
  });
});
