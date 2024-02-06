class stack{
    constructor() {
        this.item = [];
    }
    isEmpty() { 
        return this.item.length == 0;
    }
    push(item) { 
        this.item.push(item);
    }
    pop() {
        if (!this.isEmpty()) {
            return console.log("underflow")
        } else {
            this.item.pop();
        }
        
    }
}
function braceOrder(expression) {
        const stack = []
        for (let char of expression) { 
            if (char == "{" || char == "[" || char == "(") {
            stack.push(char);
            } else if (char == ")" && stack.pop() !== "(") {
            return false;
            } else if (char == "]" && stack.pop() !== "[") {
            return false;
            } else if (char == "}" && stack.pop() !== "{") {
            return false;
            }
        }
        return stack.length ==0
}

const expression1 = "({[]})";
const expression2 = "{[(])}";

console.log("Expression 1 is balanced:", braceOrder(expression1)); // Output: true
console.log("Expression 2 is balanced:", braceOrder(expression2)); 