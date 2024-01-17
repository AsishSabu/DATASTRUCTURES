class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList{
    constructor() {
        this.head = null;
    }
    append(item) { 
        const newNode=new node(item);
        if(!this.head){
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
                result += ` ${current.data} `
                current = current.next;
            }
            console.log(result);
        }
    }
    removeEven() {
        let current = this.head;
        if (!this.head) { 
            return
        } else {
           while (current.data % 2 == 0) {
                this.head = current.next;
                current = this.head;
            }
            while (current && current.next) {
                if (current.next.data % 2 == 0) {
                    current.next = current.next.next;
                } else {
                    current=current.next;
                }
            }
        }
    }
}
const list = new linkedList();
list.append(12);
list.append(10);
list.append(7);
list.append(2);
list.append(7);
list.append(4);
list.append(7);
list.removeEven();
list.display();