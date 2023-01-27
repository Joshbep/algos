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

function linearSearch(arr, num) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      return i;
    }
  }
  return -1;
}

//time BigO O(n)
//Space BigO O(1)
