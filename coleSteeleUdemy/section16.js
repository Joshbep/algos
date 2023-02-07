//quick sort intro
//like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
//works by selecting one element (called the "pivot")
//and finding the index where the pivot should end up in the sorted array


//Quick Start Function
//PIVOT HELPER

//Picking a pivot
//the runtime of quick sort depends in part on how one selects the pivot
//ideally, the pivot shoudl be chosen so that it's roughly the media value in the data set you're sorting
//for simplicity we'll always choose the pivot to be the first eleement


// pivot pseudocode
//it will help to accept three arguments: an array, a starting index, and an end index
//grab pivot
//store current pivot inde
//loop through the array

function pivot(arr, start=0, end=arr.length+1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

 let pivot = arr[start];
 let swapIndex = start;

 for(let i = start + 1; i < arr.length; i++) {
   if(pivot > arr[i]) {
     swapIndex++;
     swap(arr, swapIndex, i)
   }
 }
 swap(arr, start, swapIndex)
}

//quick sort pseudocode
//call the pivot helper
//when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray
//to the left of that index, and the subarray to the reight of the index

function quickSort(arr, left=0, right=arr.length-1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr,left,pivotIndex-1);
    //right
    quickSort(arr, pivotIndex+1,right);
  }
  return arr;
}
