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
  const IDcategory4 = (Math.random() / Math.random()).toString();
  const IDcategory41 = (Math.random() / Math.random()).toString();
  const IDcategory42 = (Math.random() / Math.random()).toString();
  const IDcategory43 = (Math.random() / Math.random()).toString();
  const IDcategory44 = (Math.random() / Math.random()).toString();
  const IDcategory45 = (Math.random() / Math.random()).toString();

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
        {
          id: IDcategory4,
          name: "Category 4",
          pathIds: [IDcategory4],
          children: [
            {
              id: IDcategory41,
              name: "Category 4.1",
              pathIds: [IDcategory4, IDcategory41],
              children: [],
            },
            {
              id: IDcategory42,
              name: "Category 4.2",
              pathIds: [IDcategory4, IDcategory42],
              children: [],
            },
            {
              id: IDcategory43,
              name: "Category 4.3",
              pathIds: [IDcategory4, IDcategory43],
              children: [],
            },
            {
              id: IDcategory44,
              name: "Category 4.4",
              pathIds: [IDcategory4, IDcategory44],
              children: [],
            },
            {
              id: IDcategory45,
              name: "Category 4.5",
              pathIds: [IDcategory4, IDcategory45],
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

  it("CategoriesService - should be created", () => {
    expect(service).toBeDefined();
  });

  it("CategoryNode tree data structure - should be initialized with the correct categoryNode structure", (done) => {
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

  it("CategoryNode tree data structure - should output each category name via recursion, in order of nesting", (done) => {
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

  it("findCategoryByPathIds - should find top-level category 2 by pathIds; matching id, pathIds and name", () => {
    let pathIds = [IDcategory2];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.id).toEqual(IDcategory2);
    expect(target.pathIds).toEqual(pathIds);
    expect(target.name).toEqual("Category 2");
  });

  it("findCategoryByPathIds - should find sub-category 2.1; matching id, pathIds and name", () => {
    let pathIds = [IDcategory2, IDcategory21];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.id).toEqual(IDcategory21);
    expect(target.pathIds).toEqual(pathIds);
    expect(target.name).toEqual("Category 2.1");
  });

  it("findCategoryByPathIds - should find sub-category 2.1.1; matching id, pathIds and name", () => {
    let pathIds = [IDcategory2, IDcategory21, IDcategory211];
    let target = service.findCategoryByPathIds(pathIds);

    expect(target).toBeDefined();
    expect(target.id).toEqual(IDcategory211);
    expect(target.pathIds).toEqual(pathIds);
    expect(target.name).toEqual("Category 2.1.1");
  });

  it("addCategoryToTarget - should add a subcategory to a target top-level category", () => {
    const pathIds = [IDcategory2];
    const name = "2.2";
    const target = service.findCategoryByPathIds(pathIds);
    const targetChildrenLength = target.children.length;

    service.addCategoryToTarget(pathIds, name);
    expect(target.children.length).toEqual(targetChildrenLength + 1);
    const newlyAdded = target.children.find((child) => child.name === name);
    expect(newlyAdded).toBeDefined();
    expect(newlyAdded.id).toBeDefined();
    expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
    expect(newlyAdded.name).toEqual(name);
    expect(newlyAdded.children).toEqual([]);
  });
  it("addCategoryToTarget - should add a subcategory to a target sub-category", () => {
    const pathIds = [IDcategory2, IDcategory21];
    const name = "2.1.2";
    const target = service.findCategoryByPathIds(pathIds);
    const targetChildrenLength = target.children.length;

    service.addCategoryToTarget(pathIds, name);
    expect(target.children.length).toEqual(targetChildrenLength + 1);
    const newlyAdded = target.children.find((child) => child.name === name);
    expect(newlyAdded).toBeDefined();
    expect(newlyAdded.id).toBeDefined();
    expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
    expect(newlyAdded.name).toEqual(name);
    expect(newlyAdded.children).toEqual([]);
  });
  it("addCategoryToTarget - should add a subcategory to a target sub-sub-category", () => {
    const pathIds = [IDcategory2, IDcategory21, IDcategory211];
    const name = "2.1.2.1";
    const target = service.findCategoryByPathIds(pathIds);
    const targetChildrenLength = target.children.length;

    service.addCategoryToTarget(pathIds, name);
    expect(target.children.length).toEqual(targetChildrenLength + 1);
    const newlyAdded = target.children.find((child) => child.name === name);
    expect(newlyAdded).toBeDefined();
    expect(newlyAdded.id).toBeDefined();
    expect(newlyAdded.pathIds).toEqual([...pathIds, newlyAdded.id]);
    expect(newlyAdded.name).toEqual(name);
    expect(newlyAdded.children).toEqual([]);
  });

  it("updateTargetName - should update a target top-level category and preserve deep equality of children", () => {
    const pathIds = [IDcategory2];
    const newName = "Category 2 Updated";
    const target = service.findCategoryByPathIds(pathIds);
    const children = target.children;
    expect(target.children).toEqual(children);
    service.updateTargetName(pathIds, newName);
    const targetAfterUpdate = service.findCategoryByPathIds(pathIds);
    expect(target.name).toEqual(newName);
    expect(target.children).toEqual(children);

    function testDeepEqualityOfChildren(
      node1: CategoryNode,
      node2: CategoryNode,
    ): boolean {
      if (node1.children.length !== node2.children.length) {
        return false;
      }
      for (let i = 0; i < node1.children.length; i++) {
        if (!testDeepEqualityOfChildren(node1.children[i], node2.children[i])) {
          return false;
        }
      }
      return true;
    }

    expect(testDeepEqualityOfChildren(target, targetAfterUpdate)).toBe(true);
  });
  it("deleteTarget - should delete a target and all its children", () => {
    const pathIds = [IDcategory2];
    const target = service.findCategoryByPathIds(pathIds);
    const targetChildren = target.children;
    const deletedPathIds: string[] = [];
    function storeChildrenPathIds(node: CategoryNode) {
      deletedPathIds.push(...node.pathIds);
      for (const child of node.children) {
        storeChildrenPathIds(child);
      }
    }
    storeChildrenPathIds(target);

    service.deleteTarget(pathIds);
    const targetAfterDelete = service.findCategoryByPathIds(pathIds);
    expect(targetAfterDelete).toBeUndefined();
    expect(target.children).toEqual(targetChildren);
    for (const pathId of deletedPathIds) {
      const deletedCategory = service.findCategoryByPathIds([pathId]);
      expect(deletedCategory).toBeUndefined();
    }
  });

  it("moveTargetDown - should move a target position down (index to the right in the children array) by one, within the same parent", () => {
    const pathIds = [IDcategory4, IDcategory41];
    const target = service.findCategoryByPathIds(pathIds);
    const parent = service.findCategoryByPathIds(pathIds.slice(0, -1));
    const targetIndex = parent.children.findIndex(
      (child) => child.id === IDcategory41,
    );
    service.moveTargetDown(pathIds);
    const targetIndexAfter = parent.children.findIndex(
      (child) => child.id === IDcategory41,
    );
    expect(target).toBeDefined();
    expect(targetIndexAfter).toBeLessThan(parent.children.length);
    expect(targetIndexAfter).toEqual(targetIndex + 1);
  });
});
