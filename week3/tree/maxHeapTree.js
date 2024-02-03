class MaxHeap {
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
      const parenti = Math.floor((i - 1) / 2);
      if (this.heap[i] > this.heap[parenti]) {
        this.swap(i, parenti);
        i = parenti;
      } else {
        break;
      }
    }
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  display() {
    console.log(this.heap);
  }
  deleteMax() {
    if (!this.heap.length) {
      return null;
    }
    if (this.heap.length == 1) {
      return this.heap;
    }
    this.swap(0, this.heap.length - 1);
    const MaxValue = this.heap.pop();
    this.heapifyDown();
  }
  heapifyDown() {
    let i = 0;
    const length = this.heap.length;
    while (true) {
      let leftChild = 2 * i + 1;
        let rightChild = 2 * i + 2;
        let largest = i
        if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
            largest=leftChild
        }
        if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }

        if (largest !== i) {
            this.swap(i, largest)
            i = largest;
        } else {
            break;
        }
    }
  }
}
const newHeap = new MaxHeap();
newHeap.insert(1);
newHeap.insert(2);
newHeap.insert(3);
newHeap.insert(4);
newHeap.insert(5);
newHeap.insert(6);
newHeap.insert(7);
newHeap.display();
newHeap.deleteMax()
newHeap.display();

newHeap.deleteMax();
newHeap.display();
newHeap.deleteMax();
newHeap.display();
