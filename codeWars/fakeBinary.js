/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
  let newString = ""
  for(let i = 0; i < x.length; i++){
    if(x[i] < 5) {
      newString += 0
    } else {
      newString += 1
    }
  }
  console.log(newString)
  return newString
}
