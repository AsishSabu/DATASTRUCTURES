class node{
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DLL{
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(item) {
        const newNode=new node(item);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode;
        }

    }
    display() {
        if (!this.head) { 
            console.log("nothing to display");
        } else {
            let current = this.head;
            let result = "";
            while (current) {
                result += ` ${current.data} `
                current=current.next;
            }
            console.log(result);
        }
    }
    delete(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (this.head === current) {
                    this.head = this.head.next;
                    this.head.prev = null;
                } else if (this.tail === current) { 
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next
                    current.next.prev = current.prev
                }
                return
            }
            current=current.next
        }
        console.log(`node with ${data} is not found`);
    }
}

const newDLL = new DLL();
newDLL.append(1)
newDLL.append(2);
newDLL.append(3);
newDLL.append(4);
newDLL.display()
newDLL.delete(1)
newDLL.display()
