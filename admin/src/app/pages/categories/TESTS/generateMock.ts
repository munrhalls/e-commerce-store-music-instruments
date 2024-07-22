function genId() {
  return String(Math.random() / Math.random());
}
const tree = {
  name: "",
  pathIds: [genId()],
  children: [],
};

export const createTree = function (tree, breadth = 0, depth = 0) {
  for (let i = 0; i < breadth; i++) {
    let name = tree.name ? `${tree.name}.${i}` : i + 1;

    const node = {
      name: name,
      pathIds: [...tree.pathIds, genId()],
      children: [],
    };
    tree.children.push(node);
  }

  if (depth < 1) return null;
  tree.children.forEach((childNode) =>
    createTree(childNode, breadth, depth - 1),
  );
  return tree;
};

createTree(tree, 4, 4);

console.dir(tree, { depth: null });
