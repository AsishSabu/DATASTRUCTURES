class node{
    constructor(data) {
        this.data = data;
        this.next=null;
     }
}
class linkedList{
    constructor() { 
        this.head = null;
    }
    display() {
        if (!this.head) {
            console.log("the linked list is empty")
        } else {
            let current = this.head;
            let result = "";
            while (current) {
                result += ` ${current.data} `
                current=current.next
            }
            console.log(result);
            

        }
    }
    append(data) {
        
        const newNode = new node(data);
        if (!this.head) { 
            this.head=newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current=current.next;
            }
            current.next=newNode;
        }
    }
    deleteNode(data) {
        if (!this.head) { 
            console.log("there is nothing to delete");
        } else {
            if (this.head.data===data) {
                this.head = this.head.next;
            } else {
                let current = this.head;
                let previous = null;
                while(current && current.data !== data){
                    previous = current;
                    current = current.next;
                }
                if (!current) {
                    console.log("the element is not founded");
                } else {
                    previous.next=current.next
                }
            }

        }
    }
}

const list = new linkedList();
list.append(34)
list.append(50)
list.append(87)
list.display();
list.deleteNode()
list.display()