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
  display() {
    if (!this.head) {
      console.log("empty linked list");
      return;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += ` ${current.data} `;
      current = current.next;
    }
    console.log(result);
  }
  append(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  reverse() {
    let previous = null;
    let current = this.head;
    let nextnode= null;
    while (current) {
       nextnode = current.next;
      current.next = previous;
      previous = current
      current=nextnode
   
    }
   this.head = previous
  }
    
}
const list = new linkedList();
list.append(12)
list.append(10)
list.append(7)
list.reverse()
list.display();
