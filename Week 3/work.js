




class node{
    constructor(value){
        this.value= value
        this.left =null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const newNode = new node(value)
        if(this.isEmpty()){
            this.root=newNode
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
    preOrder(node=this.root){
        if(node){
            console.log(node.value);
            this.preOrder(node.left)
            this.preOrder(node.right)
            
        }
    }
    

    bfsTraversal(root = this.root) {
        if (!root) {
            console.log('The tree is empty');
            return;
        }

        let queue = [];
        queue.push(root);
        
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
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


const bst = new binarySearchTree()

console.log(bst.isEmpty());
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)
console.log(bst.isEmpty());
bst.preOrder()

console.log(bst.search(bst.root, 7)); 
console.log(bst.search(bst.root, 20)); 