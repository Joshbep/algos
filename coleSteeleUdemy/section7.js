//recursion

//once upon a time...

//martin & the dragon

//objectives
//define wat recursions is
//understand two essential components
//call stack
//use helper method recursion and pure recursion to solve more difficult problems

//what is recursion?
//a process (a function in our case) that calls itself

//in almost all program languaged there is a built in data structure that manages
//what happens when functions are invoked

//its named the call stack

//The call stack
//its called a data structure - we'll talk about that later
//anytime a function is invoked it is placed (pushed) on the top of the call stack
//when javascript sees the return keyword or when the function ends, the compiler will remove (pop)

// function wakeUp() {
//   takeShower()
//   eatBreakfast()
//   console.log("ok ready to go")
// }
//
// wakeUp();

//why do I care?
//you are uysed to functions being pushed on the call stack and popped off when they are done
//when we write recursive functions, we keep pushing new functions onto the call stack


//base case
//the condition when the recursion ends
//this is the most important concept to understand


//two essential parts of a recursive function
//base case
//different input

//first recursive function

// function countDown(num) {
//   if(num <=0 ){
//     console.log("all done!");
//     return;
//   }
//   num--;
//   countDown(num);
// }

//recursion quiz
//1. a. the call stack
//2. a. a situation when the recursion ends

//second recursive function

// function sumRange(num) {
//   if(num === 1) return 1;
//   return num + sumRange(num-1)
// }
//
// console.log(sumRange(3))
//can you spot base case?
//do you notice the different input?
//what would happen if we didn't return

//factorial
//
// function factorial(num) {
//   let total = 1
//   for(let i = num; i > 1; i--) {
//     total *=i
//   }
//   return total
// }
// console.log(factorial(3))

// function factorial(num) {
//   if(num === 1) return 1
//   return num * factorial(num - 1)
// }
// console.log(factorial(4))

//where things go wrong
//no base case
//forgetting to return or returning the wrong thing


//
