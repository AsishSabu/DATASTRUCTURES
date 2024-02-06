class stack {
  constructor() {
    this.items = [];
  }
  isempty() {
    return this.items.length == 0;
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.isempty()) {
      console.log("underflow");
    } else {
      this.items.pop();
    }
    }
    peek() {
     if (this.isempty()) {
       console.log("underflow");
     } else {
      return this.items[this.items.length - 1];
     }   
    }
    print() {
        console.log(this.items);
    }
    clear() {
        this.items=[]
    }
}


const newStack = new stack();
newStack.push(10)
newStack.push(20)
newStack.push(30)
newStack.push(40)
console.log(newStack.peek())
newStack.print()