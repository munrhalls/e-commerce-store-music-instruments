import { TestBed } from "@angular/core/testing";
import { CategoriesService, CategoryNode } from "./categories.service";

export function createCategoriesServiceHarness() {
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
    categoryNode = {
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

  return {
    service,
    categoryNode,
    IDs: {
      root,
      IDcategory1,
      IDcategory2,
      IDcategory21,
      IDcategory211,
      IDcategory3,
      IDcategory31,
      IDcategory4,
      IDcategory41,
      IDcategory42,
      IDcategory43,
      IDcategory44,
      IDcategory45,
    },
  };
}
