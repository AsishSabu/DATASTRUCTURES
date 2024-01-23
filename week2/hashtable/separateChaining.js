class node{
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.next=null;
    }
}
class HashTable {
    constructor(size) {
      this.size = size;
    this.table = new Array(size).fill(null).map(() => null);
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new node(key, value);
    } else {
      let currentNode = this.table[index];
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new node(key, value);
    }
  }
  get(key) {
    const index = this.hash(key);
    let currentNode = this.table[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }
  display() {
    let result = "";
    for (let i = 0; i < this.table.length; i++) {
      result += `[${i}] -> `;
      let currentNode = this.table[i];
      while (currentNode) {
        result += `(${currentNode.key}: ${currentNode.value}) -> `;
        currentNode = currentNode.next;
      }
      result += "null\n";
    }
    console.log(result);
  }
}

const newHashTable = new HashTable(10);
newHashTable.set("name", "asish");
newHashTable.set("name", "ajay");
newHashTable.set("age", "10");
newHashTable.set("roll no:", "24");
newHashTable.set("stream", "science");

newHashTable.display();