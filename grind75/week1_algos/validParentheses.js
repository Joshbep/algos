/*
 * @param {string} s
 * @return {boolean}
 */

 //parens have to match
 //ex (){}[] works
 //({}) works
 //(] doesnt work
var isValid = function(s) {
    let bracket = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    let stack = [];

    for(let char of s){
      if(bracket[char]){
        stack.push(bracket[char])
      } else {
        if(stack.pop() !== char) return false
      }
    }
    return (!stack.length)
};
