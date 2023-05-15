/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 //we are given an array of nums
 //return what number occurs the most
 //the majority element is what appears [n/2] times
 //yu may assume the majority element always exists in the array

 //this tells us there will always only be two numbers.
 // the majoirty elements is what is greater to n/2
var majorityElement = function(nums) {
    let majorityElement = 0
    let map = {}

    for(let num of nums){
        if(!map[num]) {
            map[num] = 1
        } else{
            map[num]++
        }
        if(map[num] > nums.length / 2){
            majorityElement = num
            return majorityElement
        }
    }

};
