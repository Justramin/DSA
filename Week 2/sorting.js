



// BUBBLE SORT

// function bubble(arr){
//     for(let i =arr.length-1;i>0;i--){
//     for (let j =0 ; j<i ; j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         }
//     }
// }
// return arr
// }

// let arr= [6,5,43,2,8,4,1]
// console.log(bubble(arr))




// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0 ; i<arr.length ;i++){
//             if(arr[i]>arr[i+1]){
//                 [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//                 swapped=true
//             }
//         }
//     }while (swapped) 
//         return arr
// }


// let arr= [6,5,43,2,8,4,1]
// console.log(bubbleSort(arr));








// INSERTION SORT

// function insertionSort(arr){
//     for(let i=1 ; i<arr.length;i++){
//         for(let j=i ; j>=0 ; j--){
//             if(arr[j]<arr[j-1]){
//                 [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
//             }
//         }
//     }
//     return arr;
// }


// let arr= [6,5,43,2,8,4,1]
// console.log(insertionSort(arr));



// function insertionSorting(arr){
//     for(let i=1 ; i<arr.length ; i++){
//         let numbertoInsert = arr[i]
//         let j=i-1
//         while (j>=0 && arr[j]>numbertoInsert) {
//             arr[j+1]=arr[j]
//             j =j-1
//         }
//         arr[j+1]=numbertoInsert
//     }
//     return arr
// }

// let arr= [6,5,43,2,8,4,1]
// insertionSorting(arr)
// console.log(arr);








// QUICK SORT




// function quick(arr){
//     if (arr.length <= 1) {
//         return arr;
//     }
    
//     let pivot =arr[arr.length-1]
//     let left = []
//     let right =[]

//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }


// let arr = [6, 5, 43, 2, 8, 4, 1];
// let sortedArr = quick(arr); 
// console.log(sortedArr);










// MERGE SORT


// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid =Math.floor(arr.length/2)
//     const left =arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     const sortedArr = []

//     while (left.length && right.length) {
//         if(left[0]<=right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }        
//     }
//     return [...sortedArr,...left,...right]
// }



// let arr = [6, 5, 43, 2, 8, 4, 1];
// let sortedArr = mergeSort(arr); 
// console.log(sortedArr);





// SELECTION SORT

// function selection(arr){
 
//     for(let i=0 ; i<arr.length-1;i++){
//         let s=i
//         for(let j=i+1 ;j<arr.length;j++){
//             if(arr[j]<arr[s]){
//                 s=j
//             }
//         }
//         if(s!==null){
//             [arr[i],arr[s]]=[arr[s],arr[i]]
//         }
//     }
//     return arr
// }

// let arr = [6, 5, 43, 2, 8, 4, 1];
// let sortedArr = selection(arr); 
// console.log(sortedArr);









// class stack{
//     constructor(){
//         this.queue1=[]
//         this.queue2=[]
//     }
//     push(value){
//         this.queue1.push(value)
//         return true
//     }
//     pop(){
//         if(!this.queue1.length && !this.queue2.length)return 'empty';
//         while(this.queue1.length > 1){
//             this.queue2.push(this.queue1.shift())
//         }
//         let poppedvalue = this.queue1.shift()
//         // [this.queue1,this.queue2] = [this.queue2,this.queue1]
//         let temp = this.queue1
//         this.queue1 = this.queue2
//         this.queue2 = temp
//         return poppedvalue
//     }
// }

// const myStack=new stack()

// console.log(myStack.push(23))
// console.log(myStack.push(32))
// console.log(myStack.push(30))
// console.log(myStack.push(43))

// console.log(myStack.pop())
// console.log(myStack.queue1)





// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     const mid= Math.floor(arr.length/2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)

//     return merge(mergeSort(left),mergeSort(right))

// }

// function merge(left,right){
//     const sortedArr =[]

//     while (left.length && right.length) {
//         if(left[0]<=right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]
// }


// const arr = [3,5,6,8,93,-1,5,-3]
// const output = mergeSort(arr)
// console.log(output)





// function selection(arr){
//     for(let i =0 ; i<arr.length-1 ; i++){
//         let s =i
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[j]<arr[s]){
//                 s=j
//             }
//         }
//         if(s!==null){
//             [arr[i],arr[s]]=[arr[s],arr[i]]
//         }
//     }
//     return arr
// }

// const arr = [3,5,6,8,93,-1,5,-3]
// const output = selection(arr)
// console.log(output)





// function insert(arr){
//     for(let i=1 ; i<arr.length ; i++){
//         for(let j =i ; j>=0 ; j--){
//             if(arr[j]<arr[j-1]){
//                 [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// const arr = [3,5,6,8,93,-1,5,-3]
// const output = insert(arr)
// console.log(output)
