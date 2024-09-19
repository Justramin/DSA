


class node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty(){
        return this.root === null
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
                root.left=newNode
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

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }
    }
}

const bst = new BinarySearchTree()


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)

console.log("Check empty or not--------------");

console.log('tree Is Empty?', bst.isEmpty());

console.log('Cheking Serch Method-------------');

console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,3));
console.log(bst.search(bst.root,15));

console.log('Pre Order-----------------------');

bst.preOrder(bst.root)


console.log('In Order-----------------------');
 bst.inOrder(bst.root)

 console.log('post Order-----------------------');
 bst.postOrder(bst.root)