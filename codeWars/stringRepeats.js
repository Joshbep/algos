// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let arr=[]
  while(n > 0) {
    arr.push(s)
    n--
  }
  return arr.join("")
}

function repeatStr (n, s) {
  let arr = [];
  for(let i = 0; i < n; i++){
    arr.push(s)
  }
  return arr.join('')
}

function repeatStr (n, s) {
  let newString = ""
  while(n > 0) {
     newString += s
    n--
  }
  return newString
}

function repeatStr(n, s) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
