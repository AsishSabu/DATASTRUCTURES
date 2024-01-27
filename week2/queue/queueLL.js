class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size=0
    }
    isEmpty() {
        return this.size==0
    }
    enqueue(data) {
        const newNode=new node(data)
        if (this.isEmpty()) { 
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail=newNode
        }
        this.size++
    }
    dequeue() {
        if (this.isEmpty()) { 
            return console.log("underflow");
        } else {
            let top=this.head
            this.head = this.head.next
              this.size--;
            return top.data
        }
      
    }
    display() {
        if (this.isEmpty()) { 
            console.log("queue is empty");
        } else {
            let current = this.head;
            let result = ""
            while (current) {
                result += ` ${current.data} `
                current=current.next
            }
            console.log(result);
        }
    }
}
function reverse(str) {
    const queue = new Queue()
    for (let char of str) {
        queue.enqueue(char)
    }
    let result = ""
    while (!queue.isEmpty()) { 
        result=queue.dequeue()+result
    }
    console.log(result);
}
const queue = new Queue()
console.log(queue.isEmpty())
queue.display()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.display()
queue.dequeue()
queue.display()
reverse("asish")

