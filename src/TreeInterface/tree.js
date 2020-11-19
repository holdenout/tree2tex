const treeNode = (id, name, parent) => ({
  id,
  name,
  children: [],
  level: parent ? parent.level + 1 : 0,
  parent,
});

export const tree = (rootName) => ({
  rootId: "0",
  nextId: 1,
  root: treeNode("0", rootName, null),

  addChild(
    parent,
    newName = this.nextId.toString(),
    position = parent.children.length
  ) {
    let newId = this.nextId.toString();
    parent.children.splice(position, 0, treeNode(newId, newName, parent));
    this.nextId++;
    return this;
  },

  removeChild(node) {
    node.children.forEach((ch) => this.removeChild(ch));
    node.parent.children = node.parent.children.filter((ch) => ch !== node);
    return this;
  },

  editName(node, newName) {
    node.name = newName;
    return this;
  },

  dfTraverse(start = this.root) {
    return start.children.reduce(
      (treeArray, child) => [...treeArray, this.dfTraverse(child)],
      [start.name]
    );
  },
});

export default tree;
