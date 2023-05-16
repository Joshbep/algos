// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
//
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false



//1st solution
//time complexity O(n log n)
//Space complexity O(n)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let newS = s.split("").sort().join("")
    let newT = t.split("").sort().join("")

    if(newS !== newT){
        return false
    } else {
        return true
    }
};

//second solution
//time complexity O(n)

//we need to compare two strings
//use hash map to keep count of each letter wihtin each string
//tCount
//sCount
//compare lengths and return false if lenghts aren't the same
//loop over s string
//this is how we see if that letter exists in s count or t count
//then do for in loop to loop over an object
//for in loop lets you loop over key value pairs in objects
//compare sCount to tCount if they don't exist return true
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let sCount = {}
    let tCount = {}

    for(let i = 0; i < s.length; i++){
        if(!sCount[s[i]]) sCount[s[i]] = 0
        if(!tCount[t[i]]) tCount[t[i]] = 0
        sCount[s[i]]++
        tCount[t[i]]++
    }

    for(let ch in sCount){
        if(sCount[ch] !== tCount[ch]) return false
    }
    return true
}
