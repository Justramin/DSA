


//FEBINOCCI

// function feb(n){
//     let fib = [0,1]
//     for (let i = 2; i <n; i++) {
//         fib[i]=fib[i-1]+fib[i-2]
        
//     }
//     return fib
// }

// console.log(feb(10));
// console.log(feb(1));
// console.log(feb(4));
// console.log(feb(5));




// FECTORAL OF A NUMBER

// function fact(n){
//     let result=1
//     for(let i=2 ; i<=n ; i++){
//         result = result*i
//     }
//     return result
// }

// console.log(fact(1));
// console.log(fact(5));
// console.log(fact(10));
// console.log(fact(15));



//ARRAY PRIME NUBERS ONLY RETURN

// function prime(arr1){
//     let arr =[]
//     for(let i=0 ; i<arr1.length ; i++){
//         let value = arr1[i]
//         if(value>2){
//             let flag =0
//             for(let j=2 ; j<value;j++){
//                 if(value%j==0){
//                     flag =1
//                 }
//             }
//             if(flag==0){
//                 arr.push(value)
//             }
//         }
//     }
//    return arr
// }

// let arr1 = [1,4,6,9,3,5,9,5,0,3,23,6,8,2,33,45,7,90,65,34]

// console.log(prime(arr1))





// RECURSION FIBONACCI

// function fib(n){
//     if(n<2){
//         return n
//     }
//     return fib(n-1)+fib(n-2)
// }

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));



// RECURSION FACTORIAL

// function fectorial(n){
//     if(n<2){
//         return 1
//     }
//     return n *  fectorial(n-1)
// }

// console.log(fectorial(0));
// console.log(fectorial(1));
// console.log(fectorial(5));



//LINEAR SEARCH

// function linear(arr,n){
//     for(let i=0 ; i<arr.length ; i++){  
//         if(arr[i]==n){
//             return i
//         }
//     }
//     return-1

// }

// console.log(linear([1,2,3,4,56,7,89,43,3454,345,34],4));
// console.log(linear([1,2,3,4,56,7,89,43,3454,345,34],43));
// console.log(linear([1,2,3,4,56,7,89,43,3454,345,34],34));
// console.log(linear([1,2,3,4,56,7,89,43,3454,345,34],9));





//BINARY SEARCH

// function binary(arr,n){
//     let left = 0
//     let right = arr.length-1

//     while(left<=right){
//         let middle = Math.floor((left+right)/2)
//         if(n==arr[middle]){
//             return middle
//         }
//         if(n<arr[middle]){
//             right = middle-1
//         }else{
//             left = middle+1
//         }
//     }
//     return -1
// }


// console.log(binary([1,2,3,4,5,6,7,8,9],7));
// console.log(binary([1,2,3,4,5,6,7,8,9],4));
// console.log(binary([1,2,3,4,5,6,7,8,9],23));
























