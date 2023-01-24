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

function countDown(num) {
  if(num <=0 ){
    console.log("all done!");
    return;
  }
  num--;
  countDown(num);
}
