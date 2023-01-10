// let low = 0
// let high = list.length - 1
// let mid = Math.floor((low + high) / 2)
// let guess = list[mid]
//
// // if guess is too low update low accordingly
// if (guess < item){
//   low = mid + 1
// } else {
//   high = mid - 1
// }

// function binarySearch(list, item) {
//   let low = 0;
//   let high = list.length - 1;
//
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let guess = list[mid];
//     if(guess === item) {
//       return mid;
//     } else if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return null;
// }
//
// let my_list = [1, 3, 5, 7, 9]
//
// console.log(binarySearch(my_list, 7))

//exercise 1.1
//7 times is the maximum number of steps it would take
//exercise 1.2
//8 times is the maximum number of steps it would take

//1.3
//O(logn)

//1.4
//O(n)

//2.1
//do list becasue insert is O(1) and read is O(n)

//2.2
//a list for O(1) insertion and deletion time

//2.3
// a sorted array for the O(1) read time

//2.4
//insertion for an array is O(n) time
/*Answer: Inserting into arrays is slow. Also, if you’re using binary
search to search for usernames, the array needs to be sorted.
Suppose someone named Adit B signs up for Facebook. Their
name will be inserted at the end of the array. So you need to sort
the array every time a name is inserted!
*/

//2.5
//it is O(n) read and  O(n insertion) so slower
/*
Answer: Searching—slower than arrays, faster than linked lists.
Inserting—faster than arrays, same amount of time as linked lists.
So it’s slower for searching than an array, but faster or the same
as linked lists for everything. We’ll talk about another hybrid
data structure called a hash table later in the book. This should
give you an idea of how you can build up more complex data
structures from simple ones.
So what does Facebook really use? It probably uses a dozen
different databases, with different data structures behind them:
hash tables, B-trees, and others. Arrays and linked lists are the
building blocks for these more complex data structures.
*/
