var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    console.log(string)
    let reverse = string.split("").reverse().join("")
    if(string === reverse) {
        return true
    } else {
        return false
    }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))

var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    console.log(string)
    let reverse = string.split("").reverse().join("")
    if(string === reverse) {
        return true
    } else {
        return false
    }
};

var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let left = 0;
    let right = string.length - 1;
    while(left < right){
      if(left !== right) return false
      left++;
      right--;
    }
    return true;
};
