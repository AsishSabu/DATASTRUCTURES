class node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack{
  constructor() {
    this.top = null;
    this.size=0
  }
  isEmpty() {
    return this.size==0
  }
  push(value) {
    const newNOde = new node(value)
    newNOde.next = this.top;
    this.top = newNOde
    this.size++;
  }
  pop() {
    if (this.size == 0) { 
      return console.log("underflow");
    }
    const popped=this.top
    this.top = this.top.next
    this.size--;
    return popped
  }
  display() {
    if (this.size == 0) { 
      return console.log("the stack is empty");
    } else {
      let current = this.top
      let result = ""
      while (current) {
        result += `${current.data}`
        current = current.next
      }
      console.log(result);
    }
  }
}
function reverse(str) {
  const stack = new Stack()
  for (let char of str) {
    stack.push(char)
  }
  let result = ""
  while (!stack.isEmpty()) {
  result+=stack.pop().data
  }
  console.log(result);
}
const stack = new Stack()
stack.display()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(5)
stack.display()
stack.pop()
stack.display()
reverse("asish")