/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

//given an array of numbers and k which is most req elements
 //return the kth amount of most freq numbers

 //need to map value as key and frequency as value
 //need to sort in descending order for freqency
 //need to set an array for results
 //loop over array
 //push kth elements into array
 //return array


//time O(n log n)
//space O(n)
var topKFrequent = function(nums, k) {
    let freqCount = {};

    nums.forEach((num) => {
        if(!freqCount[num]) freqCount[num] = 0
        freqCount[num]++
    })

    let sorted = Object.entries(freqCount).sort((a, b) => b[1] - a[1])

    let result = [];
    for(let i = 0; i < k; i++){
        result.push(sorted[i][0])
    }
    return result
};
