// function reverse(str) {
//   if(str.length <= 1) return str;
//   return str.split("").reverse().join("")
// }
//
// console.log(reverse('hey'))
//
// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
//
// console.log(reverse('hey'))
//
// function isPalindrome(str) {
//   let reverse = str.split("").reverse().join("");
//   if (str === reverse) {
//     return true
//   } else {
//     return false
//   }
// }
//
// function isPalindrome(str) {
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1]
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//
// }

// function someRecursive(arr, callback) {
//   if(arr.length === 0) return false;
//   if(callback(arr[0])) return true;
//   return someRecursive(arr.slice(1), callback);
// }


// function flatten(oldArr) {
//   let newArr = []
//   for(let i =0; i <oldArr.length; i++) {
//     if(Array.isArray(oldArr[i])){
//       newArr = newArr.concat(flatten(oldArr[i]))
//     } else {
//       newArr.push(oldArr[i])
//     }
//     return newArr;
//   }
// }


// function capitalizeFirst (str) {
//   let newString = str.charAt(0).toUpperCase() + str.slice(1);
//   return newString
// }
//
// console.log(capitalizeFirst("grow"))
