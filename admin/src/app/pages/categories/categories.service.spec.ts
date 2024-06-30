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

  it("should output each category via recursion", () => {
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
  });
});
