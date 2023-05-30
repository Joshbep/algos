/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// function XO(str) {
//   let hash = {};
//   let lowercaseStr = str.toLowerCase();

//   for (let lett of lowercaseStr) {
//     if ((lett === "x" || lett === "o") && !hash[lett]) {
//       hash[lett] = 1;
//     } else {
//       hash[lett]++;
//     }
//   }

//   return hash['x'] === hash['o'];
// }

function XO(str) {
  let countX = 0;
  let countO = 0;
  let lowercaseStr = str.toLowerCase();

  for (let lett of lowercaseStr) {
    if (lett === 'x') {
      countX++;
    } else if (lett === 'o') {
      countO++;
    }
  }

  return countX === countO;
}
