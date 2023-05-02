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

//we have two string
//we need to cpmare the strings and check if they have the same characters
//if the same return true
//if not the same return false
//length !== length return false
//hash = {}
//hash = {}
//loop over
//if not there set to 0
//if there ++ to show that ch has that number of occurances
//compare ch or each map
var isAnagram = function(s, t) {
   //compare lengths
   if(s.length !== t.length) return false
   //declare hash maps
   let sCount = {};
   let tCount = {};
   //loop over s since both lengths are the same
   for(let i =0; i < s.length; i++){
       if(!sCount[s[i]]) sCount[s[i]] = 0
       if(!tCount[t[i]]) tCount[t[i]] = 0
       sCount[s[i]]++
       tCount[t[i]]++
   }
   for(ch in sCount){
       if(sCount[ch] !== tCount[ch]) return false
   }
   return true
};
