class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  display() {
    if (!this.head) {
      console.log("the linked list is empty");
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
  merge(list1,list2) {
    if (!list1 || !list2) {
     return
    }
    let current = list1.head;
    while (current.next) {
      current = current.next;
    }
    current.next = list2.head;
 }

}
const newLL = new linkedList()
newLL.append(20)
newLL.append(10);
newLL.append(30);

const newLL2 = new linkedList()
newLL2.append(1)
newLL2.append(2)
newLL2.append(3)
newLL2.append(1);
newLL2.append(2);


newLL.merge(newLL, newLL2);
newLL.display();

 