// class TrieNode {
//     constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     insert(word) {
//       let node = this.root;
//       for (let char of word) {
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }
  
//     search(word) {
//       let node = this.root;
//       for (let char of word) {
//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return node.isEndOfWord;
//     }
  
//     startsWith(prefix) {
//       let node = this.root;
//       for (let char of prefix) {
//         if (!node.children[char]) {
//           return false;
//         }
//         node = node.children[char];
//       }
//       return true;
//     }
//   }
  
//   // Example usage:
//   const trie = new Trie();
//   trie.insert("apple");
//   console.log(trie.search("apple"));
//   console.log(trie.search("app"));   
//   console.log(trie.startsWith("app"));
















// class TrieNode {
//     constructor() {
//       this.children = {};
//       this.isEndOfWord = false;
//     }
//   }
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
//     insert(word) {
//       let node = this.root;
//       for (let char of word) {
//         if (!node.children[char]) {
//           node.children[char] = new TrieNode();
//         }
//         node = node.children[char];
//       }
//       node.isEndOfWord = true;
//     }
//     getWordsWithPrefix(prefix) {
//       let node = this.root;
//       for (let char of prefix) {
//         if (!node.children[char]) {
//           return [];
//         }
//         node = node.children[char];
//       }
//       return this._getWordsFromNode(node, prefix);
//     }
//     _getWordsFromNode(node, prefix) {
//       let words = [];
//       if (node.isEndOfWord) {
//         words.push(prefix);
//       }
//       for (let char in node.children) {
//         words = words.concat(this._getWordsFromNode(node.children[char], prefix + char));
//       }
//       return words;
//     }
//   }
//   // Example usage:
//   const trie = new Trie();
//   trie.insert("apple");
//   trie.insert("app");
//   trie.insert("apricot");
//   trie.insert("banana");
  
//   console.log(trie.getWordsWithPrefix("ap"));  
//   console.log(trie.getWordsWithPrefix("ban")); 
//   console.log(trie.getWordsWithPrefix("b"));


















class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
        search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
    delete(word) {
      this._delete(this.root, word, 0);
    }
    _delete(node, word, index) {
      if (index === word.length) {
        if (!node.isEndOfWord) {
          return false;
        }
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }
      const char = word[index];
      if (!node.children[char]) {
        return false;
      }
      const shouldDeleteCurrentNode = this._delete(node.children[char], word, index + 1);
      if (shouldDeleteCurrentNode) {
        delete node.children[char];
        return Object.keys(node.children).length === 0;
      }
      return false;
    }

  }
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  console.log(trie.search("apple")); 
  trie.delete("apple");
  console.log(trie.search("apple"));