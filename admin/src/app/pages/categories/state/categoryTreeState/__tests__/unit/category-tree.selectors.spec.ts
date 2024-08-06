import { selectCategoryTree } from "../../category-tree.selectors";

describe("Category tree selectors", () => {
  it("should return category tree data", () => {
    const state = {
      categories: {
        categoryTree: {
          data: {
            id: "1",
            name: "Root",
            pathIds: [],
            children: [],
          },
          isLoading: false,
          error: null,
        },
      },
    };
    expect(selectCategoryTree(state)).toEqual({
      id: "1",
      name: "Root",
      pathIds: [],
      children: [],
    });
  });
});
