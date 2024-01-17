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
    append(data) {
        const newNOde = new node(data);
        if (!this.head) {
            this.head = newNOde;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNOde;
        }
    }
    display(){
        if (!this.head) {
            console.log("the linked is empty");
        } else {
            let current = this.head;
            let result = ""
            while (current) {
                result += ` ${current.data} `
                current = current.next
            }
            console.log(result);
        }
    }
    remove() {
        let current = this.head;
        while (current) {
            let runner = current;
            while (runner.next) {
                if (current.data == runner.next.data) {
                    runner.next = runner.next.next;
                } else {
                   runner=runner.next 
                }
            }
            current = current.next;
        }
  }
}
const newLL = new linkedList();
newLL.append(1)
newLL.append(2);
newLL.append(3);
newLL.append(4);
newLL.append(1);
newLL.append(2);
newLL.append(3);
newLL.append(4);
newLL.append(4);
newLL.append(1);
newLL.append(2);
newLL.display();
newLL.remove();
newLL.display();
