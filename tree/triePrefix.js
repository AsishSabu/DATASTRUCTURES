class TrieNode{
    constructor() {
        this.children = {}
        this.isEnd = false;
    }
}
class Trie{
    constructor() {
        this.root=new TrieNode()
    }
    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
             node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word) {
        let node = this.root;
        for (let char of word) { 
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return node.isEnd;
    }
    prefix(prefix) {
        let node = this.root;
        for (let char of prefix) { 
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return this.allWords(node,prefix)
    }
    allWords(node, prefix) {
        let words = []
        if (node.isEnd) {
            words.push(prefix)
        }
        for (let char in node.children) {
            words=words.concat(this.allWords(node.children[char],prefix+char))
        }
        return words
    }

    remove(word) {
        return this.deleteWord(this.root,word,0)
    }
    deleteWord(node, word, index) {
        if (index === word.length) {
            if (!node.isEnd) {
                return false;
            }
            node.isEnd = false;
            return Object.keys(node.children).length===0
        }
        const char = word[index];
        if (!(char in node.children)) {
            return false;
        }
        const shouldDelete = this.deleteWord(node.children[char], word, index + 1)
        if (shouldDelete) {
            delete node.children[char]
            return Object.keys(node.children).lenght===0
        }
        return false;
    }
}

const newTrie = new Trie()
newTrie.insert("asish")
newTrie.insert("aswin");
newTrie.insert("alan");
newTrie.insert("adharsh");
newTrie.insert("bilby");
newTrie.insert("baby");
newTrie.insert("sharath");
newTrie.insert("saju");
console.log(newTrie.search("asish"));
console.log(newTrie.prefix("s"));
newTrie.remove("saju")
console.log(newTrie.prefix("s"));