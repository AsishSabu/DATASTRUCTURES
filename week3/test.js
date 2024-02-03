// class node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class binaryTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     const newNode = new node(value);
//     if (!this.root) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }
//   search(value) {
//     return this.searchNode(this.root, value);
//   }
//   searchNode(root, value) {
//     if (root === null) {
//       return false;
//     }
//     if (root.value === value) {
//       return true;
//     } else if (value < root.value) {
//       return this.searchNode(root.left, value);
//     } else if (value > root.value) {
//       return this.searchNode(root.right, value);
//     }
//   }
//   bfs() {
//     const queue = [];
//     if (this.root) {
//       queue.push(this.root);
//     }
//     while (queue.length) {
//       let curr = queue.shift();
//       console.log(curr.value);
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//     }
//   }
//   isValid(root = this.root, min = null, max = null) {
//     if (!root) return true;
//     if (
//       (min !== null && root.data <= min) ||
//       (max !== null && root.data >= max)
//     )
//       return false;
//     return (
//       this.isValid(root.left, min, root.data) &&
//       this.isValid(root.right, root.data, max)
//     );
//   }
// }

// const newBst = new binaryTree();
// newBst.insert(6);
// newBst.insert(1);
// newBst.insert(5);
// newBst.insert(7);
// newBst.insert(4);
// newBst.insert(8);
// console.log(newBst.search(15));
// console.log(newBst.isValid());
// newBst.bfs()
// console.log(newBst.isValidBst());
//        6
//     2      7
//  1     5      8
// 4

//heap sort

// function heapSort(arr) {
//   buildHeap(arr);
//   for (let i = arr.length - 1; i > 0; i--){
//     [arr[i], arr[0]] = [arr[0], arr[i]]
//     heapifyUp(arr,i,0)
//   }
// console.log(arr);
// }
// function buildHeap(arr) {
//   let n = arr.length;
//   for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
//     heapifyUp(arr, n, i);
//   }
// }
// function heapifyUp(arr, size, index) {
//   let largest = index
//   let left = 2 * index + 1;
//   let right = 2 * index + 2;
//   if (left <size && arr[left] > arr[largest]) {
//     largest = left;
//   }
//   if (right < size && arr[right] > arr[largest]) {
//     largest=right;
//   }
//   if (largest !== index) {
//     [arr[largest], arr[index]] = [arr[index], arr[largest]]
//     heapifyUp(arr, size, largest);
//   }
// }

// const arr = [2,  4,  1, 8, 5, 3, 6, 8, 9]
// heapSort(arr)
// class newNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// class newBst {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const node = new newNode(value);
//     if (!this.root) {
//       this.root = node;
//     } else {
//       this.insertNode(this.root, node);
//     }
//   }
//   insertNode(root, newNode) {
//     if (!root.left) {
//       root.left = newNode;
//     } else if (!root.right) {
//       root.right = newNode;
//     } else {
//       this.insertNode(root.left, newNode);
//     }
//   }

//   isValid(root = this.root, min = null, max = null) {
//     if (!root) return true;
//     if (
//       (min !== null && root.data <= min) ||
//       (max !== null && root.data >= max)
//     )
//       return false;
//     return (
//       this.isValid(root.left, min, root.data) &&
//       this.isValid(root.right, root.data, max)
//     );
//   }
//   count(node = this.root) {
//     if (!node) {
//       return 0;
//     }
//     return 1 + this.count(node.left)+this.count(node.right)
//   }
// }
// const tree = new newBst();
// tree.insert(5);
// tree.insert(3);
// tree.insert(10);
// tree.insert(2);
// tree.insert(4);
// tree.insert(1);
// console.log(tree.count())
// console.log(tree.isValid());


// class graph{
//   constructor() {
//     this.vertices={}
//   }
//   addvertex(vertex) {
//     if (!this.vertices[vertex]) {
//       this.vertices[vertex] = new Set();
//     }
//   }
//   addEdge(vertex1, vertex2) {
//     if (!this.vertices[vertex1]) {
//       this.vertices[vertex1]=new Set()
//     }
//     if (!this.vertices[vertex2]) {
//       this.vertices[vertex2]=new Set()
//     }
//     this.vertices[vertex1].add(vertex2)
//     this.vertices[vertex2].add(vertex1)
//   }
//   display() {
//     for (let vertex in this.vertices) { 
//       console.log(vertex+"=>"+[...this.vertices[vertex]]);
//     }
//   }
// }


// const newGraph = new graph()
// newGraph.addvertex("A")
// newGraph.addvertex("B");
// newGraph.addEdge("A", "B")
// newGraph.addEdge("c", "d");
// newGraph.addEdge("d", "e");
// newGraph.display()