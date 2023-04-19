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
