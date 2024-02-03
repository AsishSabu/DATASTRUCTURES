class minHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      const parentI = Math.floor((i - 1) / 2);
      if (this.heap[i] < this.heap[parentI]) {
        this.swap(i, parentI);
        i = parentI;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let i = 0;
    const length = this.heap.length;
    while (true) {
      let leftChild = 2 * i + 1;
      let rightChild = 2 * i + 2;
      let smallest = i;
      if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }
      if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }
      if (smallest !== i) {
        this.swap(i, smallest);
        i = smallest;
      } else {
        break;
      }
    }
  }
  deleteMin() {
    if (!this.heap.length) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

      this.swap(0, this.heap.length - 1);
      const minValue=this.heap.pop()
    this.heapifyDown();
  }
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  display() {
    console.log(this.heap);
  }
}
const heap = new minHeap();
heap.insert(5);
heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(4);
heap.insert(2);
heap.display();
heap.deleteMin()
heap.display();
