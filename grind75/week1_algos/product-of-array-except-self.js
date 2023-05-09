/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.



Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

function productExceptSelf(nums) {
  // Store the length of the input array in a variable called n
  const n = nums.length;

  // Initialize two new arrays with length n, both filled with 1s
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  // Initialize a new output array with length n, filled with 1s
  const output = new Array(n).fill(1);

  // Calculate the product of all elements to the left of each index
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // Calculate the product of all elements to the right of each index
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  // Multiply the corresponding elements in the leftProducts and rightProducts arrays
  // to get the final answer
  for (let i = 0; i < n; i++) {
    output[i] = leftProducts[i] * rightProducts[i];
  }

  // Return the output array
  return output;
}
