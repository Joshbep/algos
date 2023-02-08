//radix sort intro

//comparison sorts
//average time complexity
//bubble sort O(n^2)
//insertion sort - O(n^2)
//selection sort (O(n^2))

//quick sort - O(n log n)
//merge sort - O(n log n)

//can we do better?
//yes, but not by making comparisons

//radix sort
//radix sort is a special sorting algo that works on lists of numbers
//it never makes comparisons between elements
//it exploits the fact that info about the size of a number is encoded in the number of digits
//more digits means a bigger number

//how does it work?


//radix sort works with special cases

///radix sort helpers
//in order to implement radix sort, it's helpful to build a few helper functions first:
// getDigit(num, place) - returns the digit in num at the given place value

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
