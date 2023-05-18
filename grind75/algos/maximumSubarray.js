/*
Given an integer array nums, find the
subarray
 with the largest sum, and return its sum.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104


Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

// var maxSubArray = function(nums) {
//   let maxSum = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;

//     for (let j = i; j < nums.length; j++) {
//       currentSum += nums[j];
//       maxSum = Math.max(maxSum, currentSum);
//     }
//   }

//   return maxSum;
// };
//given an array of intergers
//we want to traverse this array and bascially find the sum of subarrays returen the max sum of subarrays

//first way to solve
//two for loops
//decalre max sum to -Infinity bc all numnbers will be larger than -Infinity
//the start first for loop
//declare current sum
//start second for loop
//update current sum to += nums[j]
//so like
//currentSum += nums[j]
//set maxSum = Math.max(currentSum, MaxSum)


//second solution use Kadans algo solution
//uses hints of dynamic programming to find sum of sub arrays

//start out by setting maxSum and CurrentSum equal to index 0 in nums array
//The algorithm starts by initializing maxSum and currentSum to the value of the first element in the nums array
//loop through nums array but start at i =1
//update current sum to
//Math.max(nums[i], currentSum + nums[i])
//this helps us know to start a new sub array or continue on
//we update maxSum to hold the new max sum of sub arrays like this
//maxSum = Math.max(currentSum, maxSum)
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  let currentSum = nums[0]

  for(let i = 1; i < nums.length; i++){
      currentSum = Math.max(nums[i], nums[i] + currentSum)
      maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
};
