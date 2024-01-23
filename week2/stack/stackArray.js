class stack{
    constructor() {
        this.items=[]
    }
    isEmpty() {
        return this.items.length===0
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            return "is empty";
        }
        return this.items.pop();
    }
    print() {
       console.log(this.items.join(" "));
    }
    peek() {
        if (this.isEmpty()) {
            console.log("there is no items");
        }
        return this.items[this.items.length-1]
    }
}
let newStack = new stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.pop();
newStack.print();
console.log("Top of the stack",newStack.peek());

