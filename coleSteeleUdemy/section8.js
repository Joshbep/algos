//understand problem
//I want to return the result of base to exponent
// like 5 ^ 2 = 25
//so return base case
//return base to exponent

//regular
// function power(base, exponent){
//     if(exponent === 0) return 1
//     return base ** power
// }

//recursive
// function power(base, exponent){
//     if(exponent === 0) return 1
//     return base * power(base,exponent-1);
// }
// 2 * (power(2, 4 -1))
//           2, 3
// 2     *     8 = 16

// 3 * (power(3, 3 - 1))
// 3 *  9  = 27
// console.log(power(3,3))


//understand problem
//I want to return the factorial of num which is a paramter passed in
// if num is 4, funciton should perform 4 * 3 * 2 * 1
//return base case if factorial is 0
//return factorial solution
// function factorial(num) {
//   if(num === 0) return 1;
//   return num * factorial(num - 1)
// }
//
// console.log(factorial(4))


//understand problem
//I want to return the product of an array of numbers
// if arr is [1,2,3] do 1 * 2 = 2, 2*3 = 6 return 6
//return base case if arr.length = 0
//return factorial solution
// function productOfArray(arr) {
//   if(arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }
//
// console.log(productOfArray([1,2,3,4]))


// function recursiveRange(num) {
//   if(num === 0) return 0
//   return num + recursiveRange(num - 1);
// }
//
// console.log(recursiveRange(6))

function fib(num) {
  if(num <= 2) return 1;
  return fib(num-1) + fib(num-2)
}
console.log(fib(4))
