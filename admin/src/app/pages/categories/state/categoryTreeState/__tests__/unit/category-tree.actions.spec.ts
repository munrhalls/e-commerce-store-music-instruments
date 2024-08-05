import * as categoryTreeActions from "../../category-tree.actions";
import { CategoryTree } from "../../../../categories.model";
import { ErrorModel } from "../../../../../../@core/error-handler/error.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";

describe("Category tree actions", () => {
  it("should contain page opened action", () => {
    expect(categoryTreeActions.pageOpened()).toBeDefined();
  });
  it("should contain api load category tree action", () => {
    expect(categoryTreeActions.apiLoad()).toBeDefined();
  });
  it("should contain api load success action", () => {
    expect(categoryTreeActions.apiLoadSuccess).toBeDefined();
  });
  it("api load success action should take category tree payload", () => {
    const categoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };
    const expectedAction = {
      type: "[Category Tree] API Load Success",
      categoryTree,
    };

    expect(categoryTreeActions.apiLoadSuccess({ categoryTree })).toEqual(
      expectedAction,
    );
  });
  it("Should contain api load error action", () => {
    expect(categoryTreeActions.apiLoadError).toBeDefined();
  });
  it("api load error action should contain error payload with global error type", () => {
    const error = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Load Error",
      error,
    };

    expect(categoryTreeActions.apiLoadError({ error })).toEqual(expectedAction);
  });
});
