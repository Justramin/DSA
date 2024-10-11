 
//SET-----------------

//  const set = new Set([1,2,3,7,4])

// set.add(5)
// set.delete(1)
// set.add(1)

// console.log(set.has(5));
// // set.clear()
// console.log(set.size);

//  console.log(set);
 




//MAP-------------------

// const map = new Map([['a',1],['b',2]])

// map.set('c',3)
// // map.delete('a')
// // map.clear()
// for(const [key , value]of map){
//     console.log(`${key}:${value}`);
    
// }
// console.log(map.has('a'));
// console.log(map.size);


//QUEUE----------------------

// class Queue{
//     constructor(){
//         this.item =[]
//     }
//     enqueue(element){
//         this.item.push(element)
//     }
//     dequeu(){
//         return this.item.shift()
//     }
//     isEmpty(){
//         return this.item.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.item[0]
//         }
//         return null
//     }
//     size(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item.toString());
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// console.log(queue.size());
// queue.print()
// console.log(queue.dequeu());
// console.log(queue.peek());



//  QUEUE IN OPTIMAISED

// class Queue{
//     constructor(){
//         this.item = {}
//         this.rear = 0
//         this.front = 0
//     }
//     enqueu(element){
//         this.item[this.rear]=element
//         this.rear++
//     }
//     dequeu(){
//         const item = [this.item[this.front]]
//         delete this.item[this.front]
//         this.front++
//         return item
//     }
//     isEmpty(){
//         return this.rear-this.front===0
//     }
//     peek(){
//         return this.item[this.front]
//     }
//     size(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.item);
        
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueu(10)
// queue.enqueu(20)
// queue.enqueu(30)

// console.log(queue.size());
// queue.print()
// console.log(queue.dequeu());
// console.log(queue.peek());





















// class node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root===null
//     }

//     nodesInLeft(root){
//         let count = 0
//        if(!root){
//         console.log('its empty');
        
//        }
       
//         while(root.left){
//             count ++
//             root=root.left
//         }
       
//        return count
//     }
//     insert(value){
//         const newNode = new node(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value<newNode.value){
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
// }



// const bst  =new binarySearchTree()

// bst.insert(10)
// bst.insert(5)
// bst.insert(4)
// bst.insert(2)
// console.log(`left node count: ${bst.nodesInLeft(bst.root)}`);

// console.log(bst.isEmpty());






class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftIndex(index) {
        return 2 * index + 1;
    }

    rightIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyup();
    }

    heapifyup() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = this.parentIndex(index);
            if (this.heap[parentIdx] < this.heap[index]) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    heapifydown(index) {
        let largest = index;
        let leftIdx = this.leftIndex(index);
        let rightIdx = this.rightIndex(index);

        if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largest]) {
            largest = leftIdx;
        }

        if (rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[largest]) {
            largest = rightIdx;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifydown(largest);
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifydown(0);
        return max;
    }
}

const heap = new MaxHeap();

heap.insert(44);
heap.insert(42);
heap.insert(4);
heap.insert(74);
heap.insert(24);
