


//FACTORIAL

// function factorial(n){
//     let result =1
//     for(let i=2 ; i<=n ; i++){
//         result =result*i
//     }
//     return result
// }

// console.log(factorial(4)); //Output: 24






// PALINDROME

// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false






//POWER OF TWO 

// function isPowerOfTwo(n) {
//     if (n < 1) return false;
//     return (n & (n - 1)) === 0;
// }

// console.log(isPowerOfTwo(16)); // Output: true
// console.log(isPowerOfTwo(18)); // Output: false






//FIBONACCI

// function fibonacci(n) {
//     let sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence[i] = sequence[i - 1] + sequence[i - 2];
//     }
//     return sequence
// }

// console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]







// REVERSE NUMBER

// function reverseNumber(n) {
//     let reversed = n.toString().split('').reverse().join('');
//     return parseInt(reversed);
// }

// console.log(reverseNumber(12345)); // Output: 54321







// REVERSE STRING

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("hello")); // Output: "olleh"







// IDENTIFY THE VOWELS

// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("hello world")); // Output: 3









// REPLACE VOWELS

// function replaceVowels(str, char) {
//     return str.replace(/[aeiouAEIOU]/g, char);
// }

// console.log(replaceVowels("hello world", "*")); // Output: "h*ll* w*rld"








// OCCURRENCE

// function charOccurrence(str) {
//     let result = {};
//     for (let char of str) {
//         result[char] = result[char] ? result[char] + 1 : 1;
//     }
//     return result;
// }

// console.log(charOccurrence("hello world")); 
// // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }











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







