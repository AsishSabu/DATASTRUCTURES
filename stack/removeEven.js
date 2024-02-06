
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  isEmpty() {
    return this.items.length == 0;
  }
  pop() {
   return this.items.pop();
  }
 
}
function removeEvenNumbers(stack) {
  const tempStack = new Stack();
  while (!stack.isEmpty()) {
    const item = stack.pop();
    if (item % 2 == 0) {
      tempStack.push(item);
    }
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
    }
    return stack
}

const stack = new Stack();
stack.push(10);
stack.push(1);
stack.push(21);
stack.push(5)
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
console.log(removeEvenNumbers(stack))
