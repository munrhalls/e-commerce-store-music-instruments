import * as categoryTreeActions from "../../category-tree.actions";
import { CategoryTree } from "../../../../categories.model";
import { ErrorModel } from "../../../../../../@core/error-handler/error.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("Category tree CUD actions should exist: CREATE (3), UPDATE (9), DELETE(3)", () => {
  // create
  it("add new category action should exist", () => {
    expect(categoryTreeActions.apiAdd).toBeDefined();
  });
  it("create new category success action should exist", () => {
    expect(categoryTreeActions.apiAddSuccess).toBeDefined();
  });
  it("create new category error action should exist", () => {
    expect(categoryTreeActions.apiAddError).toBeDefined();
  });

  // read
  it("should contain api load category tree action", () => {
    expect(categoryTreeActions.apiLoad()).toBeDefined();
  });
  it("should contain api load success action", () => {
    expect(categoryTreeActions.apiLoadSuccess).toBeDefined();
  });
  it("should contain api load error action", () => {
    expect(categoryTreeActions.apiLoadError).toBeDefined();
  });

  // update
  it("update category name action should exist", () => {
    expect(categoryTreeActions.apiUpdateName).toBeDefined();
  });
  it("update category name success action should exist", () => {
    expect(categoryTreeActions.apiUpdateNameSuccess).toBeDefined();
  });
  it("update category name error action should exist", () => {
    expect(categoryTreeActions.apiUpdateNameError).toBeDefined();
  });
  it("update category move down action should exist", () => {
    expect(categoryTreeActions.apiMoveDown).toBeDefined();
  });
  it("update category move down success action should exist", () => {
    expect(categoryTreeActions.apiMoveDownSuccess).toBeDefined();
  });
  it("update category move down error action should exist", () => {
    expect(categoryTreeActions.apiMoveDownError).toBeDefined();
  });
  it("update category move up action should exist", () => {
    expect(categoryTreeActions.apiMoveUp).toBeDefined();
  });
  it("update category move up success action should exist", () => {
    expect(categoryTreeActions.apiMoveUpSuccess).toBeDefined();
  });
  it("update category move up error action should exist", () => {
    expect(categoryTreeActions.apiMoveUpError).toBeDefined();
  });

  // delete
  it("delete category action should exist", () => {
    expect(categoryTreeActions.apiDelete).toBeDefined();
  });
  it("delete category success action should exist", () => {
    expect(categoryTreeActions.apiDeleteSuccess).toBeDefined;
  });
  it("delete category error action should exist", () => {
    expect(categoryTreeActions.apiDeleteError).toBeDefined();
  });
});
