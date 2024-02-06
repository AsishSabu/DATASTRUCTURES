class Queue{
    constructor() {
        this.item=[]
    }
    isEmpty() {
        return this.item.length==0
    }
    enqueue(item) { 
        this.item.push(item)
    }
    dequeue() {
        if (this.isEmpty()) {
            return console.log("underflow");
        } else {
         return   this.item.shift()
        }
    }
}
function reverseString(str) {
    let queue = new Queue(str)
    for (let char of str) {
        queue.enqueue(char)
    }
    let reversed = "";
    while (!queue.isEmpty()) {
        reversed = queue.dequeue()+reversed
    }
    return reversed;
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(reverseString("hello"));