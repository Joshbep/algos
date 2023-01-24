//frequency counter
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;
//
//   let countNum1 = {};
//   let countNum2 = {};
//
//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }
//
//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }
//
//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }
//
//   return true;
// }
//
// console.log(sameFrequency([5, 55]))

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while(left < right) {
//     let sum = arr[left] + arr[right];
//     if(sum === 0) {
//       return [arr[left], arr[right]]
//     } else if (sum > 0) {
//       right --;
//     } else {
//       left ++;
//     }
//   }
// }
//
// //time - O(n)
// //space O(1)

function areThereDuplicates(arr) {
  arr.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < arr.length) {
    if(arr[start] === arr[next]) {
      return true
    }
    start++;
    next++;
  }
  return false
}

console.log(areThereDuplicates([1,2,3,4,5,6,7]))
