/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


function longest(s1, s2) {
  // your code
  let hash = {}
  let newArr = []
  for(let letter of s1){
    if(!hash[letter]) hash[letter] = 1
  }

  for(let letter of s2){
    if(!hash[letter]) hash[letter] = 1
  }

  for(let val in hash){
    newArr.push(val)
  }
  return newArr.sort().join("")
}
