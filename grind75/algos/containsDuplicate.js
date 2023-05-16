// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
//
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
  const numsMap = {}

  for(n of nums) {
    if(numsMap[n]) return true
    numsMap[n] = true
  }
  return false;
};

//we are given an array of intergers so numbers
//if value appears twice return false
//else return true
//I would think lets use a set
//a set is good for unique values
//also allows us to use .has
var containsDuplicate = function(nums) {
    let numSet = new Set()

    for(let n of nums){
        if(numSet.has(n)) return true
        numSet.add(n)
    }
    return false
}
