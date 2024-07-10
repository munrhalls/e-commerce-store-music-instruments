import { root } from "rxjs/internal-compatibility";
import { CategoryNode } from "../categories.service";

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
  IDcategory4: getRandomID(),
  IDcategory41: getRandomID(),
  IDcategory42: getRandomID(),
  IDcategory43: getRandomID(),
  IDcategory44: getRandomID(),
  IDcategory45: getRandomID(),
  IDcategory5: getRandomID(),
};

export let categoryNode: CategoryNode = {
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
    {
      id: IDs.IDcategory4,
      name: "Category 4",
      pathIds: [IDs.IDcategory4],
      children: [
        {
          id: IDs.IDcategory41,
          name: "Category 4.1",
          pathIds: [IDs.IDcategory4, IDs.IDcategory41],
          children: [],
        },
        {
          id: IDs.IDcategory42,
          name: "Category 4.2",
          pathIds: [IDs.IDcategory4, IDs.IDcategory42],
          children: [],
        },
        {
          id: IDs.IDcategory43,
          name: "Category 4.3",
          pathIds: [IDs.IDcategory4, IDs.IDcategory43],
          children: [],
        },
        {
          id: IDs.IDcategory44,
          name: "Category 4.4",
          pathIds: [IDs.IDcategory4, IDs.IDcategory44],
          children: [],
        },
        {
          id: IDs.IDcategory45,
          name: "Category 4.5",
          pathIds: [IDs.IDcategory4, IDs.IDcategory45],
          children: [],
        },
      ],
    },
  ],
};
