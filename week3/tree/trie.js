class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    this.poppulateSuffixTree(word);
  }

  poppulateSuffixTree(word) {
    for (let i = 0; i < word.length; i++) {
      this.insertSubstring(i, word);
    }
  }

  insertSubstring(index, word) {
    let node = this.root;
    for (let i = index; i < word.length; i++) {
      let letter = word[i];
      if (!node.children[letter]) {
        node.children[letter] = new TrieNode();
      }
      node = node.children[letter];
    }
    node.endOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfWord;
    }
    
//   prefix(prefix) {
//     let node = this.root;
//     for (let char of prefix) {
//       if (!node.children[char]) {
//         return false;
//       }
//       node = node.children[char];
//     }
//     return true;
    //   }
    

    remove(word) {
        this.recursiveRemove(this.root,word,0)
    }
    recursiveRemove(node, word, index) {
        if (index == word.length) {
            if (!node.endOfWord) {
                return false
            }
            node.endOfWord = false;
            return Object.keys(node.children).length===0
        }
        const char = word[index]
        if (!(char in node.children)) {
            return false
        }
        const shouldDelete = this.recursiveRemove(node.children[char], word, index + 1)
        
        if (shouldDelete) {
            delete node.children[char]
            return Object.keys(node.children).length===0
        }
        return false
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("appu");
trie.remove("appu")
console.log(trie.search("appu"));
