/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 //we are given an unsorted array
 //run time has to be 0(n) so instantly we can't use .sort
 //we don't really need to track the value of a key, so instead of object we can use SET
 //declare new Set
 //declare a varibale to keep up with max count
 //use for of loop
 //check to see if the loop contains someting smaller than i
 //if so move to that number
 //once there and nothing is -1 increment
 //updating current number and current score along the way
 //then update max score by using Math.max
var longestConsecutive = function(nums) {
    let numSet = new Set(nums)
    let maxScore = 0
    //[100, 5, 4, 3]
    for(let num of numSet){
        if(!numSet.has(num - 1)){
            let currentNum = num
            let currentScore = 1

            while(numSet.has(currentNum + 1)){
                currentNum += 1
                currentScore += 1
            }
            maxScore = Math.max(currentScore, maxScore)
        }
    }

    return maxScore
}
