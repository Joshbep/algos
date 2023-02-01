//insertion sort intro
//builds up the sort by gradually creating a large left half which is always sorted

//pseudocode
//start by picking the second element in the array
//now compare the second element with the one before it and swap if necessary
//continue to the next element and if it is in th eincorrect order, iterate through the sorted portion
//(i.e. the left side) to place the element in the correct place.

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log(currentVal);
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
    console.log(arr)
  }
  return arr;
}
console.log(insertionSort([2,1,9,76,4]))

//insertion sort time complexity
//
