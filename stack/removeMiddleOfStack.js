class Stack{
    constructor() {
        this.items=[]
    }
    isEmpty() {
        return this.items.length == 0
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        if (this.isEmpty()) {
            console.log("underflow");
        } else {
            return this.items.pop()
        }
    }
    size() {
        return this.items.length
    }
}

function deleteMiddle(stack) {
  let tempStack = new Stack();
  let middle = Math.floor(stack.size() / 2);
    for (let i = 0; i < middle; i++){
        tempStack.push(stack.pop())
    }
    stack.pop()
    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop())
    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)
console.log(stack.items);
deleteMiddle(stack);
console.log(stack.items);

