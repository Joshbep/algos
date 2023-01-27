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
