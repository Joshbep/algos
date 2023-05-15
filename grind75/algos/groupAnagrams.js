/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

//we recieve an array of string
 //we need to store these in an object
 //we need to loop over each word in array of strs
 //split sort and join each word
 //if the key doesn't exist in the object created set the key equal to a value of an empty array
 //push into that key
 //return an array of arrays
var groupAnagrams = function(strs) {
    //create obj
    let obj = {};

    //loop over str
    for(let str of strs){
        //create key variable to store each str sorted alphabetically
        let key = str.split("").sort().join("")

        //check if key exists
        //if not set it equal to an empty array
        if(!obj[key]) obj[key] = []
        //now push the value for that key to be the string
        obj[key].push(str)
    }
    //use object constructor to return an array of arrays containing anagram groups
    return Object.values(obj)
};
