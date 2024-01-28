class node{
    constructor(data) {
        this.data = data;
        this.head=null
    }
}
class linkedList{
    constructor() {
        this.head = null;
    }
    display() {
        if (!this.head) {
            console.log("empty linked list");
            return
        }
        let current = this.head
        let result = ""
        while (current) {
            result +=` ${current.data} `
            current = current.next
        }
        console.log(result);
    }
    append(data) {
        const newNode = new node(data)
        if (!this.head) { 
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) { 
            current = current.next
        }
        current.next = newNode
    }

    insertAfter(valueToinsertAfter, newData) {
        const newNode = new node(newData);
        let current = this.head;
        while (current && current.data!==valueToinsertAfter) {
            current=current.next
        }
        if (current) {
            newNode.next = current.next;
            current.next=newNode
        } else {
            console.log("the value not found to insert after");
        }
        
    }

    insertBefore(value, newData) {
        const newNode = new node(newData);
        
        if (!this.head) {
            console.log("linked list empty");
            return
        }
        if (this.head&&this.head.data===value) {
            newNode.next = this.head;
            this.head = newNode;
            return
        }
        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next
        }
        if (current.next) {
            newNode.next = current.next;
            current.next = newNode
            
        } else {
            console.log("the value not found to insert")
        }


    }

}
const list = new linkedList();
list.append(10);
list.insertAfter(10, 29)
list.insertBefore(10,12)
list.display()
