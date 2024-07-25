import { categoryTreeActions } from "../category-tree.actions";
import { categoryTreeReducer } from "../category-tree.reducer";

describe("Should handle actions properly", () => {
  it("Should handle loadingFromLs action", () => {
    // ARRANGE
    const state = {
      categoryTree: null,
    };
    const action = categoryTreeActions.loadingFromLs();

    // ACT
    const result = categoryTreeReducer(state, action);

    // ASSERT
    expect(result.categoryTree).toBeNull();
  });

  it("Should handle loadingFromLsSuccess action", () => {
    // ARRANGE
    const state = {
      categoryTree: null,
    };
    const categoryTree = {
      id: "1",
      name: "Category 1",
      children: [],
      pathIds: ["1"],
    };
    const action = categoryTreeActions.loadingFromLsSuccess({ categoryTree });

    // ACT
    const result = categoryTreeReducer(state, action);

    // ASSERT
    expect(result.categoryTree).toEqual(categoryTree);
  });

  it("Should handle loadingFromLsFailure action", () => {
    // ARRANGE
    const state = {
      categoryTree: {
        id: "1",
        name: "Category 1",
        children: [],
        pathIds: ["1"],
      },
    };

    const action = categoryTreeActions.loadingFromLsFailure();

    // ACT
    const result = categoryTreeReducer(state, action);

    // ASSERT
    expect(result.categoryTree).toBeNull();
  });
});
