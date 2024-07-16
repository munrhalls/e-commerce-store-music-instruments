import { CategoryNode } from "../../pages/categories/categories.service";

const getRandomID = function () {
  return String(Math.random() / Math.random());
};

export const IDs = {
  root: getRandomID(),
  IDcategory1: getRandomID(),
  IDcategory2: getRandomID(),
  IDcategory21: getRandomID(),
  IDcategory211: getRandomID(),
  IDcategory212: getRandomID(),
  IDcategory213: getRandomID(),
  IDcategory214: getRandomID(),
  IDcategory3: getRandomID(),
  IDcategory31: getRandomID(),
};

export let mockCategoryNode: CategoryNode = {
  id: IDs.root,
  name: "root",
  pathIds: [],
  children: [
    {
      id: IDs.IDcategory1,
      name: "Category 1",
      pathIds: [IDs.IDcategory1],
      children: [],
    },
    {
      id: IDs.IDcategory2,
      name: "Category 2",
      pathIds: [IDs.IDcategory2],
      children: [
        {
          id: IDs.IDcategory21,
          name: "Category 2.1",
          pathIds: [IDs.IDcategory2, IDs.IDcategory21],
          children: [
            {
              id: IDs.IDcategory211,
              name: "Category 2.1.1",
              pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory211],
              children: [],
            },
            {
              id: IDs.IDcategory212,
              name: "Category 2.1.2",
              pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory211],
              children: [],
            },
            {
              id: IDs.IDcategory213,
              name: "Category 2.1.3",
              pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory213],
              children: [],
            },
            {
              id: IDs.IDcategory214,
              name: "Category 2.1.4",
              pathIds: [IDs.IDcategory2, IDs.IDcategory21, IDs.IDcategory214],
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: IDs.IDcategory3,
      name: "Category 3",
      pathIds: [IDs.IDcategory3],
      children: [
        {
          id: IDs.IDcategory31,
          name: "Category 3.1",
          pathIds: [IDs.IDcategory3, IDs.IDcategory31],
          children: [],
        },
      ],
    },
  ],
};
