class newNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class newBst {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new newNode(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, newNode) {
    if (!root.left) {
      root.left = newNode;
    } else if (!root.right) {
      root.right = newNode;
    } else {
      this.insertNode(root.left, newNode);
    }
  }

  isValid(root = this.root, min = null, max = null) {
    if (!root) return true;
    if (
      (min !== null && root.data <= min) ||
      (max !== null && root.data >= max)
    )
      return false;
    return (
      this.isValid(root.left, min, root.data) &&
      this.isValid(root.right, root.data, max)
    );
  }
}
const tree = new newBst();
tree.insert(5);
tree.insert(3);
tree.insert(10);
tree.insert(2);
tree.insert(4);
tree.insert(1);
console.log(tree.isValid());
