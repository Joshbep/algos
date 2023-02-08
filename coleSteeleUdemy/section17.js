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

function mostDigits(nums) {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
}

//radix sort psuedocode
//define a function that accepts list of numbers
// figure out how many digits the largest number has
//loop from k=0 up to this largest number of digits
//for each iteration of the loop:
//-create buckets for each digit (0 to 9)
//-place each number in the corresponding bucket based on its kth digit
//replace our existing array with values in our buckets starting qith 0 going up to 9

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums)
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < nums.length; i++){
      let digit = getDigit(nums[i],k)
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums
}
