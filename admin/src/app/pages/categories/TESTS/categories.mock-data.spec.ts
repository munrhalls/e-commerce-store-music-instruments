import { createTree } from "./generateMock";
import { CategoryTree } from "../categories.service";
import { root } from "rxjs/internal-compatibility";

export const CategoryTree: CategoryTree = createTree(
  { name: "", pathIds: [], children: [] },
  4,
  4,
);

console.dir(CategoryTree, { depth: null });
