import { TestBed } from "@angular/core/testing";
import { CategoriesService, CategoryNode } from "./categories.service";

describe("CategoriesService", () => {
  let service: CategoriesService;
  const root = (Math.random() / Math.random()).toString();
  const IDcatgory1 = (Math.random() / Math.random()).toString();
  const IDcatgory2 = (Math.random() / Math.random()).toString();
  const IDcatgory21 = (Math.random() / Math.random()).toString();
  const IDcatgory211 = (Math.random() / Math.random()).toString();
  const IDcatgory3 = (Math.random() / Math.random()).toString();
  const IDcatgory31 = (Math.random() / Math.random()).toString();

  const categoryNode: CategoryNode = {
    id: root,
    name: "root",
    pathIds: [],
    children: [
      {
        id: IDcatgory1,
        name: "Category 1",
        pathIds: [IDcatgory1],
        children: [],
      },
      {
        id: IDcatgory2,
        name: "Category 2",
        pathIds: [IDcatgory2],
        children: [
          {
            id: IDcatgory21,
            name: "Category 2.1",
            pathIds: [IDcatgory2, IDcatgory21],
            children: [
              {
                id: IDcatgory211,
                name: "Category 2.1.1",
                pathIds: [IDcatgory2, IDcatgory21, IDcatgory211],
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: IDcatgory3,
        name: "Category 3",
        pathIds: [IDcatgory3],
        children: [
          {
            id: IDcatgory31,
            name: "Category 3.1",
            pathIds: [IDcatgory3, IDcatgory31],
            children: [],
          },
        ],
      },
    ],
  };

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

  it("should find category 2", () => {
    let pathIds = ["2"];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.name).toEqual("Category 2");
  });

  it("should find category 2.1", () => {
    let pathIds = ["2", "2.1"];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.name).toEqual("Category 2.1");
  });

  it("should find category 2.1.1", () => {
    let pathIds = ["2", "2.1", "2.1.1"];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.name).toEqual("Category 2.1.1");
  });

  it("should add a subcategory to a target category", () => {
    let pathIds = ["2"];
    let name = "2.2";
    service.addSubCategory(pathIds, name);
    let target = service.findCategoryByPathIds([...pathIds, "2.2"]);
    expect(target.name).toEqual(name);
  });
});
