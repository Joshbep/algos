//intermediate sorting algos

//pseudocode

//objectives
//understand the limitations of the sorting algos weve learned so far
//implement merge sort
//implement quick sort
//implement radix sort

//the simpler algos weve learned so far don't scale well
//try out bubbles ort on an array of 10,000 elements, it will take quite some time

//faster sorts
//they can improve time complexity from O(n^2) to O(n log n)
//theres a trade off between efficiency and simplicity
//the more efficient algos are much less simple, and generally
//take longer to understand

//merge sort intro
// its a combo of two things - merging and sorting!
//explooits the fact that arrays of 0 or 1 element are alwasy sorted
//works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

//split down to 0 or 1 element and then merge smallest first. Then merge back together again

//merging arrays

// should run in O(n+m) time and O(n+m) space
//and should not modify the parameters passed to it

//pseudocode
//create an empty array, take a look at the smallest values in each input array
//while there are still values we havent looked at

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    }else {
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;
}

console.log(merge([1,10,50], [2,14,99,100]))

//sorting part of merge sort
//break up the array into halves until you have arrays that are empty or have one element
//once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
//once the array has beem ,erged back together, return the merged (and sorted array)
