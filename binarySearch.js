// let low = 0
// let high = list.length - 1
// let mid = Math.floor((low + high) / 2)
// let guess = list[mid]
//
// // if guess is too low update low accordingly
// if (guess < item){
//   low = mid + 1
// } else {
//   high = mid - 1
// }

// function binarySearch(list, item) {
//   let low = 0;
//   let high = list.length - 1;
//
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let guess = list[mid];
//     if(guess === item) {
//       return mid;
//     } else if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return null;
// }
//
// let my_list = [1, 3, 5, 7, 9]
//
// console.log(binarySearch(my_list, 7))

//exercise 1.1
//7 times is the maximum number of steps it would take
//exercise 1.2
//8 times is the maximum number of steps it would take

//1.3
//O(logn)

//1.4
//O(n)
