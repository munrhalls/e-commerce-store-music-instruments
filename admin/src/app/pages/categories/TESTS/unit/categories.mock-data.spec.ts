import { createTree } from "../generateMock";
import { CategoryTree } from "../../categories.model";
import { root } from "rxjs/internal-compatibility";

export const categoryTree: CategoryTree = createTree(
  { name: "", pathIds: [], children: [] },
  4,
  4,
);
