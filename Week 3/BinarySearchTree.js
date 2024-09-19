// class Node {
//     constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class BinarySearchTree {
//     constructor() {
//       this.root = null;
//     }
  
//     insert(data) {
//       const newNode = new Node(data);
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this.insertNode(this.root, newNode);
//       }
//     }
  
//     insertNode(node, newNode) {
//       if (newNode.data < node.data) {
//         if (node.left === null) {
//           node.left = newNode;
//         } else {
//           this.insertNode(node.left, newNode);
//         }
//       } else {
//         if (node.right === null) {
//           node.right = newNode;
//         } else {
//           this.insertNode(node.right, newNode);
//         }
//       }
//     }
//     inOrderTraversal(node) {
//         if (node !== null) {
//           this.inOrderTraversal(node.left);
//           console.log(node.data);
//           this.inOrderTraversal(node.right);
//         }
//       }
//   }
//   // Example usage:
//   const bst = new BinarySearchTree();
//   bst.insert(15);
//   bst.insert(25);
//   bst.insert(10);
//   bst.insert(7);
//   bst.insert(22);
//   bst.insert(17);
//   bst.insert(13);

//   bst.inOrderTraversal(bst.root)


















class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    contains(data) {
      return this.search(this.root, data) !== null;
    }
  
    search(node, data) {
      if (node === null) return null;
      if (data < node.data) return this.search(node.left, data);
      if (data > node.data) return this.search(node.right, data);
      return node;
    }
  
    delete(data) {
      this.root = this.deleteNode(this.root, data);
    }
  
    deleteNode(node, data) {
      if (node === null) return null;
  
      if (data < node.data) {
        node.left = this.deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = this.deleteNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        } else {
          const minRight = this.findMinNode(node.right);
          node.data = minRight.data;
          node.right = this.deleteNode(node.right, minRight.data);
          return node;
        }
      }
    }
  
    inOrderTraversal(node) {
         if (node !== null) {
          this.inOrderTraversal(node.left);
          console.log(node.data);
          this.inOrderTraversal(node.right);
        }
    }
      
     
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(15);
  bst.insert(25);
  bst.insert(10);
  bst.insert(7);
  bst.insert(22);
  bst.insert(17);
  bst.insert(13);
// Example usage:

bst.delete(bst.root)