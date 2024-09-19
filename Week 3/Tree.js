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
  
//     search(node, data) {
//       if (node === null) return null;
//       if (data < node.data) return this.search(node.left, data);
//       if (data > node.data) return this.search(node.right, data);
//       return node;
//     }
  
//     inOrderTraversal(node) {
//       if (node !== null) {
//         this.inOrderTraversal(node.left);
//         console.log(node.data);
//         this.inOrderTraversal(node.right);
//       }
//     }

     
    
      
//   }
  

//   const bst = new BinarySearchTree();
//   bst.insert(15);
//   bst.insert(25);
//   bst.insert(10);
//   bst.insert(7);
//   bst.insert(22);
//   bst.insert(17);
//   bst.insert(13);
  
//   bst.inOrderTraversal(bst.root);
  
//   console.log(bst.search(bst.root, 17));  
  
 








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
  
//     search(node, data) {
//       if (node === null) return null;
//       if (data < node.data) return this.search(node.left, data);
//       if (data > node.data) return this.search(node.right, data);
//       return node;
//     }
    
//     preOrderTraversal(node) {
//         if (node !== null) {
//           console.log(node.data);
//           this.preOrderTraversal(node.left);
//           this.preOrderTraversal(node.right);
//         }
//       }
    
      
//   }
  

//   const bst = new BinarySearchTree();
//   bst.insert(15);
//   bst.insert(25);
//   bst.insert(10);
//   bst.insert(7);
//   bst.insert(22);
//   bst.insert(17);
//   bst.insert(13);
  
//   console.log(bst.search(bst.root, 17));  
//   bst.preOrderTraversal(bst.root);












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
  
    search(node, data) {
      if (node === null) return null;
      if (data < node.data) return this.search(node.left, data);
      if (data > node.data) return this.search(node.right, data);
      return node;
    }
  
      getHeight(node) {
        if (node === null) return -1;  
        let leftHeight = this.getHeight(node.left);
        let rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
      }    
  }
  
  const bst = new BinarySearchTree();
  bst.insert(15);
  bst.insert(25);
  bst.insert(10);
  bst.insert(7);
  bst.insert(22);
  bst.insert(17);
  bst.insert(13);

  console.log(bst.search(bst.root, 17));  
   console.log(bst.getHeight(bst.root));