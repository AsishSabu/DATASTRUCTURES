class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  push(data) {
    const newNode = new node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return console.log("underflow");
    }
    const popped = this.top;
    this.top = this.top.next;
    this.size--;
    return popped.data;
  }
  printStack() {
    if (this.isEmpty()) {
      return console.log("the stack is empty");
    }
    let current = this.top;
    let str = "";
    while (current) {
      str += ` ${current.data} `;
      current = current.next;
    }
    console.log(str);
  }
  clear() {
    this.top = null;
    this.size = 0;
  }
}

const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.printStack();
newStack.pop();
newStack.printStack();
newStack.clear();
newStack.printStack();
