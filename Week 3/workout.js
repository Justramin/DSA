// class node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }


// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root===null
//     }

//     insert(value){
//         const newNode = new node(value)
//         if(this.root===null){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     preOrder(node=this.root){
//         if(node){
//             console.log(node.value);
//             this.preOrder(node.left)
//             this.preOrder(node.right)
            
//         }
//     }
//     inOrder(node = this.root){
//        if(node){
//         this.inOrder(node.left)
//         console.log(node.value);
//         this.inOrder(node.right)
//        }
        
//     }
//     postOrder(node=this.root){
//        if (node) {
//         this.postOrder(node.left)
//         this.postOrder(node.right)
//         console.log(node.value);
        
//        }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if (value<root.value) {
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

// }



// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(11)
// bst.insert(12)
// bst.insert(15)
// bst.insert(17)
// bst.insert(19)
// bst.insert(20)
// bst.insert(40)
// console.log("empty : ",bst.isEmpty());
// bst.preOrder()
// bst.inOrder()
// bst.postOrder()
// console.log(bst.search(bst.root,100));


























class node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const newNode = new node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    preOrder(node=this.root){
        if(node){
            console.log(node.value);
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

   search(root,value){
    if(!root){
        return false
    }else{
        if(root.value===value){
            return true
        }else if (value<root.value) {
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
   }
}


const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(13)
bst.insert(15)
bst.insert(19)
bst.insert(12)
bst.insert(17)
bst.insert(14)
bst.insert(1)

console.log("empty : ",bst.isEmpty());
bst.preOrder()
console.log(bst.search(bst.root,10));

