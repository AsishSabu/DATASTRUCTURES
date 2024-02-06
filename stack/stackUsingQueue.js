class Stack{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }
    push(item) {
        while (this.queue1.length > 0) { 
            this.queue2.push(this.queue1.pop())
        }
        this.queue1.push(item);
        while (this.queue2.length > 0) { 
            this.queue1.push(this.queue2.pop())
        }
    }
    pop() {
      return this.queue1.shift();
    }

}

const stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop())
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());