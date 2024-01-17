class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constuctor() {
    this.head = null;
  }
  prepend(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
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

  display() {
    if (!this.head) {
      console.log("the linked list is empty");
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.data} `;
      current = current.next;
    }
    console.log(result);
    }
    
}

function array(arr) {
    const list = new linkedList();
    for (const elemnts of arr) {
        list.append(elemnts)
    }
    return list
}

const list = new linkedList();
list.append(20);
list.prepend(50);
list.prepend(490);
list.append(1);
list.prepend(60);
list.append(30);
const link=array([1,2,3,4,5,6,7,8])

list.display();
