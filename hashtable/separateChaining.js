class node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class hashTable {
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
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new node(key, value);
    }
  }
  get(key) {
    const index = this.hash(key);
    let currentNode = this.table[index];
    while (currentNode.next) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    let currentNode = this.table[index];
    let prev = null;
    while (currentNode) {
      if (currentNode.key === key) {
        if ((prev===null)) {
          this.table[index] = currentNode.next;
        } else {
           prev.next = currentNode.next;
        }
       return true
      }
      prev = currentNode;
      currentNode = currentNode.next;
  
    }
    return false;
  }

  display() {
    let result = "";
    for (let i = 0; i < this.table.length; i++) {
      result += `${i}->`;
      let currentNode = this.table[i];
      while (currentNode) {
        result += `(${currentNode.key}:${currentNode.value}) -> `;
        currentNode = currentNode.next;
      }
      result += "null\n";
    }
    console.log(result);
  }
}

const newHashTable = new hashTable(10)
newHashTable.set("name", "asish");
newHashTable.set("age", "21");
newHashTable.set("gender", "male");
newHashTable.set("place", "karintharuvi");
newHashTable.set("state", "kerala");
newHashTable.set("number", "7902501858");

newHashTable.remove("age");

newHashTable.display();
