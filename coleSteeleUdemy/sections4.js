//algos and problems solving patterns

//what is an algorithm?
//a process or a set of steps to accomplish a certain task

//HOW DO YOU IMPROVE
//1. Devise a plan for solving problems
//2. Master common problem solving patterns

//A simple, foolproof, magical, miraculous, fail-safe approach
//* NOT REALLY

//Problem SOLVING
//Understand the problem
//explore concrete examples
//break it down
//solve/simplify
//look back and refactor

//UNDERSTANDING PROBLEMS
//1. can you restate the problem in my own words?
//2. what are the inputs that go into the problem?
//3. what are the outputs that should come from the solution to the problem
//4. can the outputs be determined from the inputs? in other words
//do I have enough information to solve the problem?(you may not be able to answer this question until you set about solving the problem. That'sns okay; it's still worth considering the question at this early stage
//5. how should I label the important pieces of data that are a apart of this problem?

//write a function which takes two numbers and returns their sum

//Understanding the problem
//1.implement addition
//2.
// - ints?
// - floats?
// - what about string for large numbers
//3.
//-int? float? string?
//4.
//5.

//EXPLORE CONCRETE EXAMPLES
//start with simple examples
//progress to more complex examples
//explore examples with empty inputs
//explore examples with invalid inputs

//write a function which takes in a string and return counts of each character in the string

//CharCount("aaaa"); //{a:4}
//charCount("hello"); //{h:1, e:1, l:2, o:1}


//BREAK IT DOWN
//explicity write out the steps you need to take.
//this forces you to think about the code you'll write before you write it
//and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details

//write a function which takes in a string and return counts of each character in the string
//function charCount(str){
  //make object to return at end
  //loop over string, for each charater..
    //if the char is a number/letter AND  key in object, add one to count
    //if the char is a number/letter AND not in object, add it and set the value to 1
    //if character is something else (space, period, etc...) don't do anything

  //return object at end
//}

//SOLVE/SIMPLIFY

//SOLVE THE PROBLEM
//if you can't
//SOLVE A SIMPLER PROBLEM

//SIMPLIFY
//find the core difficulty in what you're tring to do
//temporarily ignore that diffulty
//write a simplified solution
//then incorporate that difficulty back in

//write a function which takes in a string and return counts of each character in the string
// function charCount(str){
//   //make object to return at end
//   let result = {};
//   //loop over string, for each charater..
//   for(let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase()
//     //if the char is a number/letter AND  key in object, add one to count
//     if(result[char] > 0){
//       result[char]++;
//     }
//     //if the char is a number/letter AND not in object, add it and set the value to 1
//     else {
//       result[char] = 1;
//     }
//   }
//     //if character is something else (space, period, etc...) don't do anything
//
//   //return object at end
//   return result
// }
// console.log(charCount("Hi there!"))


// REFACTORING QUESTIONS
// - can you check the results?
// - can you derive the result differently?
// - can you understand it at a glance
// - can you use the result or method for some other problem?
// - can you improve the performance of your solution?
// - can you think of other ways to refactor?
// - how have other people solved this problem?

// function charCount(str) {
//   let result = {};
//   for(let char of str) {
//     char = char.toLowerCase();
//     if(/[a-z0-9]/.test(char)) {
//       if(result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result
// }

function charCount(str) {
  let result = {};
  for(let char of str) {
    char = char.toLowerCase();
    //regular expression
    if(/[a-z0-9]/.test(char)) {
      result[char] == ++result[char]  || 1;
    }
  }
  return result
}

console.log(charCount('hello hi 99!'))

//regular expressions can make performance vary


//RECAP
//understand the problem
//explore concrete examples
//break it down
//solve/simplify
//look back and refactor
//
