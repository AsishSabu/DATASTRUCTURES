// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length-1; i++) {
//             if (arr[i] >arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr;
// }

// console.log(bubbleSort([2,5,4,3,5,7,8,3,2,1]));


//occurence pending-----

// function Occurence(str,substr) {
//     let count = 0;
//     let position = str.indexOf(substr)
//     while (position !== -1) {
//         count++;
//         position=str.indexOf(substr,position+1)
//     }
//     console.log(count);
// }

// Occurence("aaasiaaishaaaams","aa")


class Stack{
    constructor() {
        this.item=[]
    }
    isEmpty() {
        return this.item.length==0
    }
    push(item) {
        this.item.push(item)
    }
    pop() {
        if (this.isEmpty()) {
            return console.log("underflow");
        } else {
           return this.item.pop()
        }
    }
    
}
// function braceOrder(str) {
//     const stack = []
//     for (let char of str) {
//         if (char == "[" || char == "{" || char == "(") {
//           stack.push(char);
//         } else if (char == ")" && stack.pop() !== "(") {
//           return false;
//         } else if (char == "]" && stack.pop() !== "[") {
//           return false;
//         } else if (char == "}" && stack.pop() !== "{") {
//           return false;
//         }
    
//     }
//         return stack.length == 0;
// }

// console.log(braceOrder("{[()]}"))
// console.log(braceOrder("{[(])}"))

function removeEven(stack) {
    const tempStack = new Stack();
    while (!stack.isEmpty()) { 
        const item = stack.pop();
        if (item % 2 !== 0) {
            tempStack.push(item);
        }
    }
    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
    return stack;
    
}
function removeMiddle(stack) { 
    const tempStack = new Stack();
    let mid = Math.floor(this.item.length / 2);
    for (let i = 0; i < middle; i++){
        tempStack.push(stack.pop());
    }    
    stack.pop();
    while (!tempStack.length == 0) {
        stack.push(tempStack.pop());
    }
    return stack;
}
const stack = new Stack()
stack.push(1)
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
console.log(removeEven(stack));
