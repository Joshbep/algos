//What is dynmaic programming?
//a Method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions

//where does the name come from?
//coined by richard bellman

//overlapping subproblems
//a problem is said to have overlapping subproblems if it can
//be broken into subproblems which are reused several times

//fibanacci sequence
//"ever number after the first two is the sum of the two preceding ones"
//1,1,2,3,5,8,13,21

//optimal substructure
//a problem is said to have optimal substructure if an optimal solution can be constructured
//from optimal solutions of its subproblems

//lets return our pal...
//the Fibonacci sequence

//let's write it!
//- fib(n) = fib(n-1) + fib(n-2)
//-fib(2) is 1
//-fib(1) is 1

function fib(n) {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
