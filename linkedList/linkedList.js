// class Node{
//     constructor(value) {
//         this.value = value;
//         this.next=null;
//     }
// }

// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(value) {
//     const node = new Node(value);
   
//     if (!this.isEmpty()) {
//       node.next = this.head
//     }
//      this.head = node;
//     this.size++;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("empty linked list")
//     } else {
//       let curr = this.head;
//       let listedValues="";
//       while (curr) {
//         listedValues+=`${curr.value}`
//         curr=curr.next;
      
//       }
//       console.log(listedValues);
//     }

//   }
// }

// const list = new linkedList(10);
// console.log("list is empty ?", list.isEmpty());
// console.log("list size ", list.getSize());
// list.print();
// list.prepend(10);
// list.print();
// list.prepend(20);
// list.prepend(30);
// list.print();



class node{
  constructor(data) {
    this.data = data;
    this.next=null
  }
}
class linkedList{
  constuctor() {
    this.head=null
  }
  prepend(data) {
    const newNode=new node(data);
    if (!this.head) {
      this.head = newNode
      return
    }
    newNode.next = this.head
    this.head=newNode

  }

  append(data) { 
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode
      return
    }
    let current = this.head;
    while (current.next) {
      current=current.next
    }
    current.next=newNode
  }

  display() {
    if (!this.head) {
      console.log('the linked list is empty');
    }
    let current = this.head
    let result = "";
    while (current) {
      result += `${current.data} `
      current=current.next
    }
    console.log(result);
  }
}


const list = new linkedList()
list.append(20)
list.prepend(50)
list.prepend(490)
list.append(1)
list.prepend(60)
list.append(30)

list.display()
