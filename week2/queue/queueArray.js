class queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    this.items.shift();
  }
  peek() {
    if (this.isEmpty) {
      console.log("queue is empty");
      return;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  print() {
    if (this.isEmpty()) {
        console.log("queue is empty");
        return
    }
    console.log( this.items.toString() );
  }
}

const newQueue = new queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.print();
