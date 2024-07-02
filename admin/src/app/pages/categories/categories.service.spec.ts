import { TestBed } from "@angular/core/testing";
import { CategoriesService, CategoryNode } from "./categories.service";

describe("CategoriesService", () => {
  let service: CategoriesService;
  let categoryNode: CategoryNode;
  const root = (Math.random() / Math.random()).toString();
  const IDcategory1 = (Math.random() / Math.random()).toString();
  const IDcategory2 = (Math.random() / Math.random()).toString();
  const IDcategory21 = (Math.random() / Math.random()).toString();
  const IDcategory211 = (Math.random() / Math.random()).toString();
  const IDcategory3 = (Math.random() / Math.random()).toString();
  const IDcategory31 = (Math.random() / Math.random()).toString();

  beforeEach(() => {
    const categoryNode: CategoryNode = {
      id: root,
      name: "root",
      pathIds: [],
      children: [
        {
          id: IDcategory1,
          name: "Category 1",
          pathIds: [IDcategory1],
          children: [],
        },
        {
          id: IDcategory2,
          name: "Category 2",
          pathIds: [IDcategory2],
          children: [
            {
              id: IDcategory21,
              name: "Category 2.1",
              pathIds: [IDcategory2, IDcategory21],
              children: [
                {
                  id: IDcategory211,
                  name: "Category 2.1.1",
                  pathIds: [IDcategory2, IDcategory21, IDcategory211],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: IDcategory3,
          name: "Category 3",
          pathIds: [IDcategory3],
          children: [
            {
              id: IDcategory31,
              name: "Category 3.1",
              pathIds: [IDcategory3, IDcategory31],
              children: [],
            },
          ],
        },
      ],
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: CategoriesService,
          useValue: new CategoriesService(categoryNode),
        },
      ],
    });
    service = TestBed.inject(CategoriesService);
  });

  it("should be created", () => {
    expect(service).toBeDefined();
  });

  it("should be initialized with the correct categoryNode structure", (done) => {
    service.getCategoryNode().subscribe((categoryNode) => {
      expect(categoryNode.id).toEqual(root);
      expect(categoryNode.name).toEqual("root");
      expect(categoryNode.children.length).toEqual(3);

      expect(categoryNode.children[0].id).toEqual(IDcategory1);
      expect(categoryNode.children[1].id).toEqual(IDcategory2);
      expect(categoryNode.children[2].id).toEqual(IDcategory3);

      const category2 = categoryNode.children[1];
      expect(category2.children[0].id).toEqual(IDcategory21);
      expect(category2.children[0].children[0].id).toEqual(IDcategory211);

      expect(categoryNode.children[1].pathIds).toEqual([IDcategory2]);
      expect(category2.children[0].children[0].pathIds).toEqual([
        IDcategory2,
        IDcategory21,
        IDcategory211,
      ]);

      done();
    });
  });

  it("CategoryNode data structure - should output each category name via recursion, in order of nesting", (done) => {
    service.getCategoryNode().subscribe((categoryNode) => {
      function getCategoryNameList(categoryNode: CategoryNode): string[] {
        const names: string[] = [];

        function traverse(node: CategoryNode) {
          names.push(node.name);
          for (const child of node.children) {
            traverse(child);
          }
        }

        traverse(categoryNode);
        return names;
      }

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
      done();
    });
  });

  it("should find top-level category 2 by pathIds; matching id, pathIds and name", () => {
    let pathIds = [IDcategory2];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.id).toEqual(IDcategory2);
    expect(target.pathIds).toEqual(pathIds);
    expect(target.name).toEqual("Category 2");
  });

  it("should find sub-category 2.1; matching id, pathIds and name", () => {
    let pathIds = [IDcategory2, IDcategory21];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.id).toEqual(IDcategory21);
    expect(target.pathIds).toEqual(pathIds);
    expect(target.name).toEqual("Category 2.1");
  });

  it("should find sub-category 2.1.1; matching id, pathIds and name", () => {
    let pathIds = [IDcategory2, IDcategory21, IDcategory211];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.id).toEqual(IDcategory211);
    expect(target.pathIds).toEqual(pathIds);
    expect(target.name).toEqual("Category 2.1.1");
  });

  it("should add a subcategory to a target top-level category", () => {
    const pathIds = [IDcategory2];
    const name = "2.2";
    const target = service.findCategoryByPathIds(pathIds);
    const targetChildrenLength = target.children.length;

    service.addSubCategory(pathIds, name);
    expect(target.children.length).toEqual(targetChildrenLength + 1);
    const newlyAdded = target.children.find((child) => child.name === name);
    expect(newlyAdded).toBeDefined();
    expect(newlyAdded.id).toBeDefined();
    expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
    expect(newlyAdded.name).toEqual(name);
    expect(newlyAdded.children).toEqual([]);
  });
  it("should add a subcategory to a target sub-category", () => {
    const pathIds = [IDcategory2, IDcategory21];
    const name = "2.1.2";
    const target = service.findCategoryByPathIds(pathIds);
    const targetChildrenLength = target.children.length;

    service.addSubCategory(pathIds, name);
    expect(target.children.length).toEqual(targetChildrenLength + 1);
    const newlyAdded = target.children.find((child) => child.name === name);
    expect(newlyAdded).toBeDefined();
    expect(newlyAdded.id).toBeDefined();
    expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
    expect(newlyAdded.name).toEqual(name);
    expect(newlyAdded.children).toEqual([]);
  });
});
