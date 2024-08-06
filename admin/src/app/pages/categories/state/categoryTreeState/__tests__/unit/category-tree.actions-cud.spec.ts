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
      targetId: "1",
      newCategory: newCategory,
    };

    const expectedAction = {
      type: "[Category Tree] API Create New Category",
      addingNewCategory,
    };

    expect(
      categoryTreeActions.apiCreateNewCategory({ addingNewCategory }),
    ).toEqual(expectedAction);
  });

  it("create new category success action should contain ENTIRE categoryTree object", () => {
    const categoryTree: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Create New Success Category",
      categoryTree: categoryTree,
    };

    expect(
      categoryTreeActions.apiCreateNewCategorySuccess({ categoryTree }),
    ).toEqual(expectedAction);
  });

  it("create new category error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Create New Category Error",
      error: error,
    };

    expect(categoryTreeActions.apiCreateNewCategoryError({ error })).toEqual(
      expectedAction,
    );
  });

  // update category name
  it("update category name action should contain updated category payload", () => {
    const updatedCategory: CategoryTree = {
      id: "2",
      name: "UPDATED NAME",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Name",
      updatedCategory: updatedCategory,
    };

    expect(
      categoryTreeActions.apiUpdateCategoryName({ updatedCategory }),
    ).toEqual(expectedAction);
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

    expect(
      categoryTreeActions.apiUpdateCategoryNameSuccess({ categoryTree }),
    ).toEqual(expectedAction);
  });
  it("update category name error action should contain global format error payload", () => {
    const error: ErrorModel = new ServerConnectionError();
    const expectedAction = {
      type: "[Category Tree] API Update Name Error",
      error: error,
    };

    expect(categoryTreeActions.apiUpdateCategoryNameError({ error })).toEqual(
      expectedAction,
    );
  });

  // update category move down
  it("update category move down action should contain moved target category payload", () => {
    const moveDownTargetCategory: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Move Down",
      moveDownTargetCategory: moveDownTargetCategory,
    };

    expect(categoryTreeActions.apiMoveDown({ moveDownTargetCategory })).toEqual(
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

    const expectedAction = {
      type: "[Category Tree] API Update Move Up",
      moveUpTargetCategory: moveUpTargetCategory,
    };

    expect(categoryTreeActions.apiMoveUp({ moveUpTargetCategory })).toEqual(
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
    const toDeleteTargetCategory: CategoryTree = {
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    };

    const expectedAction = {
      type: "[Category Tree] API Update Delete",
      toDeleteTargetCategory: toDeleteTargetCategory,
    };

    expect(
      categoryTreeActions.apiDeleteCategory({ toDeleteTargetCategory }),
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
      categoryTreeActions.apiDeleteCategorySuccess({
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

    expect(categoryTreeActions.apiDeleteCategoryError({ error })).toEqual(
      expectedAction,
    );
  });
});

// TEST ROI VALUE:
// +1 SAVED MINUTES OR HOURS - CAUGHT TYPO! "[Category Tree] API Create New" -> "[Category Tree] API Create New Category" - that could take H O U R S if it was later, mixed up with all else
// +2 SAVED MINUTES OR HOURS - CAUGHT TYPO!! - type: "[Category Tree] API Create New !!!Error Category",
// +3 SAVED (potentially a lot) of TIME ON SOME NICE CONCEPTUAL STRUCTURE CHECKS - I could have missed some of the actions, but I've covered all of them and I made sure it makes sense as a whole
// +1 SAVED TIME LATER ON - I've written the tests in a way that they will be easy to maintain and understand in the future

// PROOF THESE UNIT TESTS ROI IS SUCH THAT IT SAVES TIME:
// API Categories Service needed to receive specific info for CRUD, e.g. for create - target id and new added category object. I'd be sending entire huge categoryTree every time if payload included target category. Instead, looking at tests, quickly realized:
// - I DON'T NEED TO NORMALIZE AND FLATTEN THE ENTIRE TREE JUST FOR THAT
// - I CAN SIMPLY CHANGE ACTION PAYLOAD
// - DID THAT, QUICKLY TESTED - WORKS, SOLVED...MINUTES INSTEAD OF HOURS
