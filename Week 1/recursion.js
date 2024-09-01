




//FACTORIAL USING RECURSION

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120





// PALINDROME USING RECURSION

// function isPalindrome(str) {
//     function check(start, end) {
//         if (start >= end) return true;
//         if (str[start] !== str[end]) return false;
//         return check(start + 1, end - 1);
//     }
//     return check(0, str.length - 1);
// }

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false







// POWER OF TWO USING RECURSION

// function isPowerOfTwo(n) {
//     if (n < 1) return false;
//     if (n === 1) return true;
//     if (n % 2 !== 0) return false;
//     return isPowerOfTwo(n / 2);
// }

// console.log(isPowerOfTwo(16)); // Output: true
// console.log(isPowerOfTwo(18)); // Output: false








//FIBONACCI USING RECURSION

// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(7)); // Output: 13








// REVERSE NUMBER USING RECURSION

// function reverseNumber(n, reversed = 0) {
//     if (n === 0) return reversed;
//     return reverseNumber(Math.floor(n / 10), reversed * 10 + (n % 10));
// }

// console.log(reverseNumber(12345)); // Output: 54321







// REVERSE STRING USING RECURSION

// function reverseString(str) {
//     if (str === "") return "";
//     return reverseString(str.substr(1)) + str[0];
// }

// console.log(reverseString("hello")); // Output: "olleh"







// IDENTIFY THE VOWELS USING RECURSION

// function countVowels(str) {
//     function helper(index) {
//         if (index === str.length) return 0;
//         let isVowel = "aeiouAEIOU".includes(str[index]) ? 1 : 0;
//         return isVowel + helper(index + 1);
//     }
//     return helper(0);
// }


// console.log(countVowels("hello world")); // Output: 3









// REPLACE VOWELS USING RECURSION

// function replaceVowels(str, char) {
//     function helper(index) {
//         if (index === str.length) return "";
//         let currentChar = "aeiouAEIOU".includes(str[index]) ? char : str[index];
//         return currentChar + helper(index + 1);
//     }
//     return helper(0);
// }

// console.log(replaceVowels("hello world", "*")); // Output: "h*ll* w*rld"







// OCCURRENCE USING RECURSION

// function charOccurrence(str) {
//     function helper(index, result) {
//         if (index === str.length) return result;
//         let char = str[index];
//         result[char] = (result[char] || 0) + 1;
//         return helper(index + 1, result);
//     }
//     return helper(0, {});
// }

// console.log(charOccurrence("hello world")); 
// // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

