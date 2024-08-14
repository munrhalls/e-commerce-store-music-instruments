import * as categoryTreeActions from "../../category-tree.actions";
import { CategoryTree } from "../../../../categories.model";
import { ErrorModel } from "../../../../../../@core/error-handler/error.model";
import { ServerConnectionError } from "../../../../../../@core/error-handler/errors/serverConnectionError";
describe("Category tree CUD actions should take proper payloads: CREATE (3), UPDATE (9), DELETE(3)", () => {
  // create new category
  it("create new category action payload: should contain target id and newCategory", () => {
    const newCategory: CategoryTree = {
      id: "2",
      name: "some new category",
      pathIds: ["2"],
      children: [],
    };

    const addingNewCategory = {
      targetPathIds: ["1"],
      newCategory: newCategory,
    };

    const expectedAction = {
      type: "[Category Tree] API Add Category To Target",
      addingNewCategory,
    };

    expect(categoryTreeActions.apiAdd(addingNewCategory)).toEqual(
      expectedAction,
    );
  });

  it("create new category success action should contain ENTIRE categoryTree object", () => {
    const categoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Add Category To Target Success",
      categoryTree: categoryTree,
    };

    expect(categoryTreeActions.apiAddSuccess({ categoryTree })).toEqual(
      expectedAction,
    );
  });

  it("create new category error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Add Category To Target Error",
      error: error,
    };

    expect(categoryTreeActions.apiAddError({ error })).toEqual(expectedAction);
  });
  // read category tree
  it("load category tree action should not contain payload", () => {
    const expectedAction = {
      type: "[Category Tree] API Load",
    };

    expect(categoryTreeActions.apiLoad()).toEqual(expectedAction);
  });
  it("load category tree success action should contain ENTIRE categoryTree object", () => {
    const categoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Load Success",
      categoryTree: categoryTree,
    };

    expect(categoryTreeActions.apiLoadSuccess({ categoryTree })).toEqual(
      expectedAction,
    );
  });

  it("load category tree error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Load Error",
      error: error,
    };

    expect(categoryTreeActions.apiLoadError({ error })).toEqual(expectedAction);
  });

  // update category name
  it("update category name action should contain updated category payload", () => {
    const updatedCategory: CategoryTree = {
      id: "2",
      name: "UPDATED NAME",
      pathIds: [],
      children: [],
    };

    const updatingTargetName = {
      targetPathIds: ["2"],
      name: "UPDATED NAME",
    };

    const expectedAction = {
      type: "[Category Tree] API Update Name",
      updatingTargetName: updatingTargetName,
    };

    expect(categoryTreeActions.apiUpdateName(updatingTargetName)).toEqual(
      expectedAction,
    );
  });

  it("update category name success action should contain ENTIRE updated categories object", () => {
    const categoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Name Success",
      categoryTree: categoryTree,
    };

    expect(categoryTreeActions.apiUpdateNameSuccess({ categoryTree })).toEqual(
      expectedAction,
    );
  });
  it("update category name error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Update Name Error",
      error: error,
    };

    expect(categoryTreeActions.apiUpdateNameError({ error })).toEqual(
      expectedAction,
    );
  });

  // update category move down
  it("update category move down action should contain moved target category payload", () => {
    const moveDownTargetCategory: CategoryTree = {
      id: "1",
      name: "Category 1",
      pathIds: ["1"],
      children: [],
    };

    const targetPathIds = moveDownTargetCategory.pathIds;

    const expectedAction = {
      type: "[Category Tree] API Update Move Down",
      targetPathIds: moveDownTargetCategory.pathIds,
    };

    expect(categoryTreeActions.apiMoveDown({ targetPathIds })).toEqual(
      expectedAction,
    );
  });
  it("update category move down success action should contain ENTIRE updated object payload", () => {
    const updatedCategoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Move Down Success",
      categoryTree: updatedCategoryTree,
    };

    expect(
      categoryTreeActions.apiMoveDownSuccess({
        categoryTree: updatedCategoryTree,
      }),
    ).toEqual(expectedAction);
  });
  it("update category move down error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Update Move Down Error",
      error: error,
    };

    expect(categoryTreeActions.apiMoveDownError({ error })).toEqual(
      expectedAction,
    );
  });

  // update category move up
  it("update category move up action should contain moved target category payload", () => {
    const moveUpTargetCategory: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const targetPathIds = moveUpTargetCategory.pathIds;

    const expectedAction = {
      type: "[Category Tree] API Update Move Up",
      targetPathIds: targetPathIds,
    };

    expect(categoryTreeActions.apiMoveUp({ targetPathIds })).toEqual(
      expectedAction,
    );
  });
  it("update category move up success action should contain ENTIRE updated categories object", () => {
    const updatedCategoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Move Up Success",
      categoryTree: updatedCategoryTree,
    };

    expect(
      categoryTreeActions.apiMoveUpSuccess({
        categoryTree: updatedCategoryTree,
      }),
    ).toEqual(expectedAction);
  });
  it("update category move up error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Update Move Up Error",
      error: error,
    };

    expect(categoryTreeActions.apiMoveUpError({ error })).toEqual(
      expectedAction,
    );
  });

  it("delete category action should contain to-delete target category payload", () => {
    const category: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: ["1"],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Delete",
      targetPathIds: ["1"],
    };

    expect(
      categoryTreeActions.apiDelete({ targetPathIds: category.pathIds }),
    ).toEqual(expectedAction);
  });
  it("delete category success action should contain ENTIRE updated categories object", () => {
    const updatedCategoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Delete Success",
      categoryTree: updatedCategoryTree,
    };

    expect(
      categoryTreeActions.apiDeleteSuccess({
        categoryTree: updatedCategoryTree,
      }),
    ).toEqual(expectedAction);
  });

  it("delete category error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Update Delete Error",
      error: error,
    };

    expect(categoryTreeActions.apiDeleteError({ error })).toEqual(
      expectedAction,
    );
  });
});
