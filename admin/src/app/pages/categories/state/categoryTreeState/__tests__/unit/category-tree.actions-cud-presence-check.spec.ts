import * as categoryTreeActions from "../../category-tree.actions";

describe("Category tree CUD actions should exist: CREATE (3), UPDATE (9), DELETE(3)", () => {
  it("add new category action should exist", () => {
    expect(categoryTreeActions.apiCreateNewCategory).toBeDefined();
  });
  it("create new category success action should exist", () => {
    expect(categoryTreeActions.apiCreateNewCategorySuccess).toBeDefined();
  });
  it("create new category error action should exist", () => {
    expect(categoryTreeActions.apiCreateNewCategoryError).toBeDefined();
  });

  it("update category name action should exist", () => {
    expect(categoryTreeActions.apiUpdateCategoryName).toBeDefined();
  });
  it("update category name success action should exist", () => {
    expect(categoryTreeActions.apiUpdateCategoryNameSuccess).toBeDefined();
  });
  it("update category name error action should exist", () => {
    expect(categoryTreeActions.apiUpdateCategoryNameError).toBeDefined();
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

  it("delete category action should exist", () => {
    expect(categoryTreeActions.apiDeleteCategory).toBeDefined();
  });
  it("delete category success action should exist", () => {
    expect(categoryTreeActions.apiDeleteCategorySuccess).toBeDefined;
  });
  it("delete category error action should exist", () => {
    expect(categoryTreeActions.apiDeleteCategoryError).toBeDefined();
  });
});
