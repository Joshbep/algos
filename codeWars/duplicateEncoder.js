/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// function duplicateEncode(word) {
//   let map = {};
//   let newString = "";

//   for (let letter of word) {
//     letter = letter.toLowerCase(); // Ignore capitalization

//     if (!map[letter]) {
//       map[letter] = 1;
//     } else {
//       map[letter]++;
//     }
//   }

//   for (let letter of word) {
//     letter = letter.toLowerCase();

//     if (map[letter] <= 1) {
//       newString += "(";
//     } else {
//       newString += ")";
//     }
//   }

//   return newString;
// }

function duplicateEncode(word) {
  let newString = ""
  word = word.toLowerCase();

  for(let i = 0; i < word.length; i++){
    if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
      newString+="("
    } else {
      newString+=")"
    }
  }
  return newString
}
