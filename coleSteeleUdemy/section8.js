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
