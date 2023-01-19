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
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
