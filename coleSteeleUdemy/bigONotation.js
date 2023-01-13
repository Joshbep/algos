 //objectives
 //describe big O
 //simpligy big O expressions
 //define time complexity and space complexity
 //evaluate the time complexity and space complexity of different algos


// function reverse(s) {
//   return s.split("").reverse().join("")
// }
//
// console.log(reverse("joe"))


//add up to n
// function addUpTo(n) {
//   let total = 0
//   for(let i = 1; i <= n; i++){
//     total += i;
//   }
//   return total;
// }
// console.log(addUpTo(2))


//what does better mean?
//faster?
// less memory-intensive?
//more readable?

//if not time then what?

//faster operation to count
// function addUpTo(n) {
//   return n * (n+1) / 2;
// }

// function addUpTo(n) {
//   let total = 0
//   for(let i = 1; i <= n; i++){
//     total += i;
//   }
//   return total;
// }
// console.log(addUpTo(2))

//this is n additions
//n assignments
//as n grows there are more assignments
//n comparisons
// 20 numbers then 20n

//regardless of the exact number, focus on the general trend.
//as n grows the number of operations grows roughly proportionally with n

//introcuding BIG O

//a way to formalize fuzzy counting

//O(1)
//as n grows it has no effect to the run time

//O(n)
//as n grows so does the run time to n

//nested loops for example are O(n^2)
//O(n^2)


//simplifying BIG O expressions

//constants don't matter
//smaller terms don't matter


//BIG O Shorthands

//arithmetic operations are constant
//variables assignment is constant
//accessing elements in an array(by index) or object (by key) is constant
//in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop


//quiz 1 on Big O

//1
// O(n)

//2
//O(n)

//3
//O(1)

//4
//O(n^3)

//5
//O(n)
