//how do you improve?
//1. devise a plan for solving problems
//2. master common problem solving patterns

//next up problem solving paterns

//some Patterns
//Frequency Counter
//Multiple Pointers
//sliding window
//divide and conquer
//dynamic programming
//greedy algorithms
//backtracking
//many more

//frequency counters
//this pattern uses objects or sets to collect
//values/frequencies of values
//this can often avoid the need for nested loops or O(N^2) operations with arrays/strings

//write a function called same which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

//a naive solution
// function same(arr1, arr2) {
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   for(let i = 0; i < arr1.length; i++) {
//     let correctIdx = arr2.indexOf(arr1[i] ** 2)
//     if(correctIdx === -1) {
//       return false;
//     }
//     arr2.splice(correctIdx,1);
//   }
//   return true;
// }

//refactored solution
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);
//     for(let key in frequencyCounter1){
//         if(!(key ** 2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }


//anagram
//given two strings, write a function to determine if the second string
//is an anagram of the first. An anagram is a word, phrase, or name
//formed by rearranging the letters of another, such as cinema, formed
//iceman
//understanding problem
// accept two string and compare to see if each sting has the same length and letters
//concrete example
//cinema and iceman is an anagram
//break it down
//accept two strings
//maybe nested for loops?
//try frequency counter
// function anagram(str1, str2) {
//   if(first.length !== second.length){
//     return false
//   }
//   const lookup = {}
//
//   for(let i = 0; i < first.length; i++){
//     let letter = first[i]
//
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//
//   for(let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     if(!lookup[letter]){
//       return false
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   return true;
// }

//section 5 multiple pointers
//create pointers or values and move towards the begining end or middle

//sumzero

// function sumZero(arr) {
//   for(let i =0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }
//
// console.log(sumZero([-4, -3, -2, 0, 1, 2, 5]))

//time - O(n^2)
//space O(1)

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while(left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum === 0) {
//       return [arr[left], arr[right]]
//     } else if (sum > 0) {
//       right --;
//     } else {
//       left ++;
//     }
//   }
// }
//
// //time - O(n)
// //space O(1)
//
// console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))

//countUniqueValue

// function countUniqueValue(arr) {
//   if(arr.length === 0) return 0
//   let i = 0;
//   for(let j = 1; j < arr.length; j++) {
//     if(arr[i] !== arr[j]) {
//       i++;
//       arr[i]= arr[j]
//     }
//   }
//   return i +1 ;
// }
//
// console.log(countUniqueValue([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]))
//time - O(n)
//space O(1)

//sliding window

//maxSubArraySum

function maxSubArraySum(arr, num) {
  if(num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for(let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for(let j = 0; j < num; j++) {
      temp += arr[i+j];
    }
    if(temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))
