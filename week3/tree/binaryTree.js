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
  search(value) {
    return this.searchNode(this.root, value);
  }
  searchNode(root, value) {
    if (root == null) {
      return false;
    } 
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.searchNode(root.left, value);
      } else {
        return this.searchNode(root.right, value);
      }
    }
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left)
           this.preorder(root.right);
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right);
        }
    }
    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right)
            console.log(root.value);
        }
    }
    bfs() {
        const queue = []
        if (this.root) {
            queue.push(this.root)
            while (queue.length) {
                let curr = queue.shift();
                console.log(curr.value);
                if (curr.left) {
                    queue.push(curr.left)
                }
                if (curr.right) {
                    queue.push(curr.right)
                }
            }
        }
    }
    deleteNode(value) {
        return this.delete(this.root,value)
    }
    delete(root, value) { 
        if (root === null) {
            return null;
        }
        if (value < root.value) {
            root.left=this.delete(root.left,value)
        } else if (value > root.value) {
            root.right=this.delete(root.right,value)
        } else {
            if (root.left == null) {
                return root.right
            } else if(root.right == null){
                return root.left
            }
            root.value = this.min(root.right);
            root.right=this.delete(root.right,root.value)
        }
        return root
    }
    min(root) {
        if (!root.left) {
          return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
}

const newBst = new Bst();
newBst.insert(10);
newBst.insert(12);
newBst.insert(5);
newBst.insert(2);
newBst.insert(4);
newBst.insert(8);
newBst.insert(7);
newBst.insert(20);
newBst.insert(15);
console.log(newBst.search(12));
// newBst.preorder(newBst.root)
// newBst.inorder(newBst.root);
// newBst.postorder(newBst.root);
// newBst.bfs()
console.log("minimum value ", newBst.min(newBst.root))
deleteNode(4)
console.log("minimum value ", newBst.min(newBst.root));
console.log("maximum value ",newBst.max(newBst.root));

