/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

//solution
//time O(n)
//space O(n)

//we want the string split into multiple strings of two letters
//we want to return an array of the strings
function solution(str){
  //create a new arr
  let newArr = []
  //loop over str
  for(let i = 0; i < str.length; i += 2){
    newArr.push(str[i] + (str[i + 1] || "_"))
  }
  return newArr
}
