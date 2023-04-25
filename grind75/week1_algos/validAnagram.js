//time complexity O(n log n)
//Space complexity O(n)

//1st solution
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
var isAnagram = function (s, t) {
  if(s.length !== t.length) return false
  let sCount = {};
  let tCount = {};

  for(let i = 0; i < s.length; i++){
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
