// const quickSort = (arr) => {
//   //base case
//   if(arr.length <= 1) {
//     return arr
//   } else {
//     //recursive case
//     //array to hold left
//     let less = [];
//     //array to hold right
//     let greater = [];
//     //pivot
//     let pivot = arr.pop();
//     //new array for sorted
//     let newArray=[]
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] < pivot) {
//         less.push(arr[i])
//       } else {
//         greater.push(arr[i])
//       }
//     }
//     return newArray.concat(quickSort(less), pivot, quickSort(greater));
//   }
// }
//
// let myArray = [3, 0, 2, 5, -1, 4, 1, 100 ];
// console.log(myArray)
// let sortedArray = quickSort(myArray);
// console.log(sortedArray)

// const printItem = (list) => {
//   for(i in list){
//     console.log(list[i])
//   }
// }
// printItem([1, 2, 3, 4])

//4.5
//O(n)
//4.6
//O(n)
//4.7
//O(1)
//4.8
//(n^2)
