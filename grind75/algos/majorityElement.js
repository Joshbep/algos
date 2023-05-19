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
 //time O(n)
 //space O(n)
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
//time O(n)
//space O(1)
//create variable for majoirty nums = null
//create count to keep track

//use a for loop for nums
//see if majoirty element = null
//if so set it to num

var majorityElement = function(nums) {
//decalre majorityElement
    let majorityElement = null
//declare count
    let count = 0

//for of loop
    for(let num of nums){
//if = null set majoirty
//count = 1
        if(majorityElement === null){
           majorityElement = num
           count = 1
        } else if(majorityElement === num){
            //else if majority = num
            //count++
            count++
        } else {
            //else
            //count --
            count--
        }
    }
    //if count === 0
    //majority = null
    if(count === 0){
       majorityElement = null
    }

    return majorityElement
};
