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
