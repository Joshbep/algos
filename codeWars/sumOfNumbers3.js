/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

//declare a sum
//loop over
//i = a, i <= b; i++
//we would update sum

function getSum(a, b){
   //Good luck!
  if(a === b) return a
  let sum = 0
  let min = Math.min(a, b)
  let max = Math.max(a, b)

  while(min <= max){
    sum+= min
    min++
  }
  return sum
}
