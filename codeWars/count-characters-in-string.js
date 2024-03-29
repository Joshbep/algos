/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  // TODO
  if(string.length === 0) return {}
  let count = {}
  for(let lett of string){
    if(!count[lett]){
      count[lett] = 1
    } else {
      count[lett]++
    }
  }
  return count;
}

//solution
