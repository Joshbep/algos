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


//recovered valid parens problem
//we are given a string
//check if valid
//it is valid if
//open brackets must be closed by same type of bracket
//must be closd in correct order

//we are given s = ['()']

// we need a map to mape keys to values to keep track

//we are given a string
//determine if the input string is valid
//it is valid if the opening bracket is closed by the cprrect closing bracket
//we can use a map to map the key of an opening bracket to the value of the closing
//we need to loop over s and see if the characters are in bracket
//to do this we can use a stack
//it follows LIFO principles last in first out
// we would declare an array to push in the value, if brackets contains ch
//if it doesn't contain ch we pop and compare
var isValid = function(s) {
    let brackets = {
        "(":")",
        "[":"]",
        "{":"}"
    }

    let stack = []
    //[()]
    for(let ch of s){
        //if brackets has (, push )
        if(brackets[ch]){
            stack.push(brackets[ch])
        } else {
            //when we get to ), brackets doesn't have this as a key
            //we pop the stack which is ) and if ch isn't ) we return false
            //if it does we continue
            if(stack.pop() !== ch) return false
        }
    }
    if(stack.length === 0) return true
}
