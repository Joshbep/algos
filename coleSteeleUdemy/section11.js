//what is sorting?
//sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order
//examples
//sorting numbers from smallest to largest
//sorting names alphabeticaly
//sorting movies based on release year
//sorting movies based on revenue

// function sort(arr) {
//   return arr
// }
// sort([23,45,6,12,13])
//should return 6,12,13,23,45

//why do we need to learn this?
//sorting is an incredibly common task, so it's good to know how it works
//there are many ways to sort things, and different techniques have their own advantages and disadvantages


//objectives
//implement bubble sort
//implement selection sort
//implement insertion sort
//understand why it is important to learn these simpler sorting algos

//javascript has a sort method
//but it doesn't always work like you want it to

//telling javascript how to sort
//The built in sort method accepts an optional comparator function
//you can use this comparator function to tell javascript how you want it to sort
//the comparator looks at paors of elements (a and b),
//determines their sort order based on the return value
  //if it returns a negative number, a should come before b
  //if it returns a positive number, a should come after b,
  //if it returns 0, a and b are the same as far as the sort is concerned

// function numberCompare(num1, num2) {
//   return num1 - num2;
// }

//BUBBLE SORT
// a sorting algo where the largest values bubble up to the top
