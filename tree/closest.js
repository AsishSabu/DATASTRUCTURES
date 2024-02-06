class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }
  insert(value) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  closest(target) {
    let closest = this.root.value;
    let curr = this.root;
    while (curr != null) {
      if (Math.abs(target - curr.value) < Math.abs(target - closest)) {
        closest = curr.value;
      }
      if (target < curr.value) {
        curr = curr.left;
      } else if (target > curr.value) {
        curr = curr.right;
      } else {
        return closest;
      }
    }
    return closest;
  }
}
const newBst = new Bst();
newBst.insert(10);
newBst.insert(12);
newBst.insert(5);

newBst.insert(4);
newBst.insert(2);
newBst.insert(8);
newBst.insert(7);
newBst.insert(20);
newBst.insert(15);
console.log("closest", newBst.closest(13));