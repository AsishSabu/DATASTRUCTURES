class Queue{
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(item) {
        this.stack1.push(item);
    }
    dequeue() {
        if (this.stack2.length == 0) {
            while (this.stack1.length > 0) {
               this.stack2.push(this.stack1.pop())
           } 
        }
        return this.stack2.pop();
    }


}

const newQueue = new Queue();
newQueue.enqueue(10)
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);
newQueue.enqueue(50);
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());