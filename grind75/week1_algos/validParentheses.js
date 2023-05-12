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

//we then need a stack
//the idea is if we traverse s above
//we check if the ch is in our map. it is push the val of that key onto the stack
//when we reach the second ch we and it isn't a key we pop off stack
//if the pop doesn't equal the ch we return
//if it does continue until s length === 0
var isValid = function(s) {
    let map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    let stack = []

    //loop
    for(let c of s){
        if(map[c]){
            //if (, push )
            stack.push(map[c])
        } else {
            //if we popped stack and got ) it should equal )
            //if not return false
            if(stack.pop() !== c) return false
        }
    }
    return stack.length === 0
};
