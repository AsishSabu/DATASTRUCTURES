class Stack {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.isEmpty()) {
      return "underflow";
    } else {
    return  this.items.pop();
    }
  }
}
function deleteNumber(stack, target) {
  let tempStack = new Stack();
  let found = false;

  while (!stack.isEmpty()) {
    let current = stack.pop();
    if (current === target) {
      found = true;
      break;
    } else {
      tempStack.push(current);
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  if (!found) {
    console.log("The element is not found");
  }

  return stack; // Return the modified stack
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
console.log(stack.items);
console.log(deleteNumber(stack, 10))


