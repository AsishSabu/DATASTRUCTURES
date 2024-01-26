// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
    
//   }
//     hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++){
//             hash+=key.charCodeAt(i)
//         }
//         return hash % this.size;
//   }
//   set(key, value) {
//     const index = this.hash(key)
//     this.table[index] = value;
//   }
//   get(key) {
//     const index = this.hash(key);
//     return this.table[index]
//   }
//   remove(key) {
//     const index = this.hash(key);
//     this.table[index] =undefined
//   }
//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//          console.log(i, this.table[i]);
//       }
//     }
//   }

// }

// const newHash = new HashTable(20);
// newHash.set("name", "asish")
// newHash.set("age", "10")
// console.log(newHash.get("age"));

// newHash.display()
// newHash.set("aeg", "20");
// newHash.display();


class hashTable{
  constructor(size) {
    this.table = new Array(size)
    this.size=size
  }
  hash(key) {
    let hash=0
    for (let i = 0; i < key.length; i++) { 
      hash+=key.charCodeAt(i)
    }
    return hash%this.size
  }
  set(key, value) {
    let index = this.hash(key)
    this.table[index] ={key,value}
    
  }
  get(key) {
  let index = this.hash(key)
   return this.table[index].value
  }
  remove(key) {
  let index = this.hash(key)
    this.table[index]=undefined
  }
  print() {
    for (let i = 0; i < this.size; i++) { 
      if (this.table[i]) {
        console.log(`${this.table[i].key}  =>  ${this.table[i].value}`);
      }
    }
  }
}
const newHash =new hashTable(15)
newHash.set("name", "asish")
newHash.set("age", "21")
newHash.set("gender", "male") 
newHash.set("place", "karintharuvi")
newHash.set("state", "kerala")
newHash.set("number", "7902501858")
newHash.remove("number");
newHash.remove("age");
newHash.print();