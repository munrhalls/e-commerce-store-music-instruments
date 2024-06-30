import { TestBed } from "@angular/core/testing";
import { CategoriesService, CategoryNode } from "./categories.service";

describe("CategoriesService", () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesService],
    });
    service = TestBed.inject(CategoriesService);
  });

  it("should be created", () => {
    expect(service).toBeDefined();
  });

  it("CategoryNode data structure - should output each category name via recursion, in order of nesting", () => {
    const categoryNode: CategoryNode = {
      id: "root",
      name: "root",
      pathIds: ["root"],
      children: [
        {
          id: "1",
          name: "Category 1",
          pathIds: ["root", "1"],
          children: [],
        },
        {
          id: "2",
          name: "Category 2",
          pathIds: ["root", "2"],
          children: [
            {
              id: "2.1",
              name: "Category 2.1",
              pathIds: ["root", "2", "1"],
              children: [
                {
                  id: "2.1.1",
                  name: "Category 2.1.1",
                  pathIds: ["root", "2", "1", "1"],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: "3",
          name: "Category 3",
          pathIds: ["root", "3"],
          children: [
            {
              id: "3.1",
              name: "Category 3.1",
              pathIds: ["root", "3", "1"],
              children: [],
            },
          ],
        },
      ],
    };

    function getCategoryNameList(categoryNode: CategoryNode): string[] {
      const names: string[] = [];

      function traverse(node: CategoryNode) {
        names.push(node.name); // Add the current node's name to the list
        for (const child of node.children) {
          traverse(child); // Recursively traverse child nodes
        }
      }

      traverse(categoryNode); // Start traversal from the root node
      return names;
    }

    // Example usage:
    const categoryNameList = getCategoryNameList(categoryNode);
    console.log(categoryNameList);
    expect(categoryNameList).toEqual([
      "root",
      "Category 1",
      "Category 2",
      "Category 2.1",
      "Category 2.1.1",
      "Category 3",
      "Category 3.1",
    ]);
  });

  it("should find a category by pathIds", () => {});
});
