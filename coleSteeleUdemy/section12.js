//SELECTION SORT

//similar to bubble sort. but instead of first placing large values into sorted position, it places small values into sorted position

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if(i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
