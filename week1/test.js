class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  append(item) {
    const newNode = new node(item);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  deleteLast() {
    if (!this.head) {
      console.log("nothing to delete");
      return;
    } else if (this.head.next == null) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
  }
  delete(item) {
    if (!this.head) {
      console.log("nothing to delete");
    } else if (this.head.data === item) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current && current.data !== item) {
        previous = current;
        current = current.next;
      }
      if (!current) {
        console.log("the element is not found");
      } else {
        previous.next = current.next;
      }
    }
  }
  reverse() {
    let current = this.head;
    let previous = null;
    let nextNode = null;
    while (current) {
      nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
      }
      this.head=previous
  }
  display() {
    if (!this.head) {
      console.log("linked list is empty");
    } else {
      let current = this.head;
      let result = "";
      while (current) {
        result += ` ${current.data} `;
        current = current.next;
      }
      console.log(result);
    }
  }
    prepend(item) { }
    
    removeDuplicates() {
        let current = this.head;
        while (current) {
            let checker = current
            while (checker.next !== null) {
                if (checker.next.data === current.data) {
                    current.next=checker.next.next
                } else {
                    checker=checker.next
                }
            }
            current=current.next
        }
    }
}
const linked = new linkedList();
function Link(arr) {
  for (element of arr) {
    linked.append(element);
  }
}

let arr = [1, 2, 3,3,4, 5,5, 6, 7,7, 9, 0];
let arrayToLL = Link(arr);
linked.display();
linked.deleteLast();
linked.display();
linked.delete(5);
linked.display();
linked.delete(5);
linked.display();
linked.append(5);
linked.display();
linked.delete(5);
linked.display();
linked.reverse()
linked.display();
linked.reverse();
linked.display();
linked.removeDuplicates();
linked.display();

// function binarySearch(arr, num) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
//     while(leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (num === arr[middleIndex]) return middleIndex;
//         if (num < arr[middleIndex]) {
//             rightIndex=middleIndex-1
//         } else {
//             leftIndex=middleIndex+1
//         }
//     }

// }

// console.log(binarySearch([1,2,3,4,5,6,67,7,8,8],5));

// function reverse(str) {
//     if (str == "") {
//         return ""
//     } else {
//         return reverse(str.substr(1))+str.charAt(0)
//     }
// }

// console.log(reverse("asish"));

// const arr = [1, 2, 3, 4, 5, 6,]
// const [first, ...rest] = arr
// console.log(first);
// console.log(rest);

// function reversed(arr) {
//     if (arr.length === 0) {
//         return [];
//     } else {
//         const [first,...rest] = arr
//         return [...reversed(rest),first]
//     }
// }

// console.log(reversed([1,2,3,4,5,6,7,8,9]));
