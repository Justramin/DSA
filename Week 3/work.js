




class Node{
    constructor(value){
        this.value= value
        this.left =null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        const newNode = new Node(value)
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
    preOrder(Node=this.root){
        if(Node){
            console.log(Node.value);
            this.preOrder(Node.left)
            this.preOrder(Node.right)
            
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
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
        
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return root;
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    findLeafNodes(Node = this.root, leaves = []) {
        if (Node) {
            if (!Node.left && !Node.right) {
                leaves.push(Node.value);
            }
            this.findLeafNodes(Node.left, leaves);
            this.findLeafNodes(Node.right, leaves);
        }
        return leaves;
    }


    findSecondLargest() {
        if (!this.root || (!this.root.left && !this.root.right)) {
            return null; 
        }
    
        let current = this.root;
        let parent = null;
    
        while (current.right !== null) {
            parent = current;
            current = current.right;
        }
    
     
        if (current.left !== null) {
            current = current.left;
         
            while (current.right !== null) {
                current = current.right;
            }
            return current.value;
        }
    
               return parent.value;
    }

}


const bst = new BinarySearchTree ()

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

console.log(`min value is : ${bst.min(bst.root)}`);
console.log(`max value is : ${bst.max(bst.root)}`);
console.log("deleting somthing.....");

bst.delete(30)
bst.preOrder()

console.log("findLeafNodes");

console.log(bst.findLeafNodes())

bst.insert(3)
bst.insert(4)
bst.insert(5)

console.log("Second Largest is: ",bst.findSecondLargest());
