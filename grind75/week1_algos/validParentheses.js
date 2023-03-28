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
    //you can only return true if stack is empty
    return (!stack.length)
};

//key value pair
// so bracket[char] return value
//in this case bracket[(] returns )

// time complexity = O(N)
// space complexity = O(N)
var isValid = function(s) {
    let bracket = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    let stack = [];
    for(let char of s){
      //this is checking if the character is an opening bracket
      if(bracket[char]){
        //char is an opening bracket
        stack.push(bracket[char])
      } else if(stack.length > 0 && stack[stack.length - 1] === char){
        //char is a closing bracket and top of stack matches
        stack.pop();
      } else {
        //ch is a clsoing bracket and top of the stack doesn't match
        return false;
      }
    }
    return (!stack.length)
};



// if stack is ()
//let (
// if ( in bracket
// push ( into stack
// so stack is [()]
