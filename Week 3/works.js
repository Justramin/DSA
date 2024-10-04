 
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























