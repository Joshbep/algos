//intro to linear search

//javascript has search!
//there are many methods

//indexOf
//includes
//find
//findIndex

//but how do these work?

// lets search for 12
//[5,8,1,100,12,3,12]

//Linear Search Pseudocode
//this function accepts an array and a value
//loop through the array and check if
//the current array eleement is equal to the value
//if it is return index
//if never found return -1

// function linearSearch(arr, num) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

//time BigO O(n)
//Space BigO O(1)

//Linear Search BIG O

//BEST CASE
//O(1)

//WORST
//O(n)

//AVERAGE
//O(n)

//Binary Search
//Binary search is a much faster form of search
//Binary search only works on sorted arrays

//DIVIDE AND CONQUER
//Split in half and if bigger move up


//Binary Search Pseudocode
//This function accepts a sorted array and a value
//create a left pointer at the start of the array, and a right pointer at the end of the array
//while the left pointer comes before the right pointer:
  // create a pointer in the middle
  //if you find the value you want, return the index
  //if the value is too small, move the left pointer up
  //if the value is too large move the right pointer down
//if you never find the value return -1


//
// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while(arr[middle] !== elem && start <= end) {
//     if(elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if(arr[middle] === elem) {
//     return middle
//   } else {
//     return -1;
//   }
// }
//
// console.log(binarySearch([2,5,6,9,13,15,28], 5))


//BINARY SEARCH BIG O
//what about BIG O

//WORST AND AVERAGE
//O(log n)

//BEST CASE
//O(1)

//rememebr binary can only be used with sorted arrays

//naive string search

//loop over the longer string
//loop over the shorter string
//if the characters don't match, break out of the inner loop
//if the characters do match keep going
//if you complete the inner loop and find a match increment the count of matches
//return the count

function searchNaiveString(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for(let j = 0; j < short.length; j++) {
      if(short[j] !== long[i + j]) {
        break;
      }
      if(j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(searchNaiveString('lorie loled', 'e'))
