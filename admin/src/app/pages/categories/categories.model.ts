export interface CategoryTree {
  id: string;
  name: string;
  pathIds: string[];
  children: CategoryTree[];
}
