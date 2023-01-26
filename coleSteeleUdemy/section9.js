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
