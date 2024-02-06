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
      return      this.items.pop()
        }
    }
    clear() {
        this.items=[]
    }

}
function reverse(str) {
    let stack =new Stack();
    for (let char of str) {
        stack.push(char)
    }
    let reversed = "";
    while (!stack.isEmpty()) {
        reversed+=stack.pop()
    }
    return reversed
}

console.log(reverse("hlooooo"));