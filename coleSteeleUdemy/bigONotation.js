 //objectives
 //describe big O
 //simpligy big O expressions
 //define time complexity and space complexity
 //evaluate the time complexity and space complexity of different algos


// function reverse(s) {
//   return s.split("").reverse().join("")
// }
//
// console.log(reverse("joe"))


//add up to n
function addUpTo(n) {
  let total = 0
  for(let i = 1; i <= n; i++){
    total += i;
  }
  return total;
}
console.log(addUpTo(2))
