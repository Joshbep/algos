/*
1.1
is Unique: implement an algorithm to determine if all characters in a string are unique. 
what if you cannot use additional data structures
*/

// function uniqueCharacters(str) {
//   let hash = {};
//   for (let letter of str) {
//     if (!hash[letter]) {
//       hash[letter] = 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(uniqueCharacters("blow up pup"))

// function hasUniqueCharacters(str) {
//     let charSet = new Set();
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (charSet.has(char)) {
//         return false; // Found a repeated character, return false
//       }
//       charSet.add(char);
//     }
//     return true; // All characters are unique, return true
//   }

/*
1.2
given two strings, write a method to decide if one is a permutation of the other 
*/

//we need to compare both strings, the character counts in both strs and compare to see if the character counts for each letter are the same
//easy way to do this is with hashmap

// function permutation(str1, str2){
//     if(str1.length !== str2.length) return false
//     let str1Count = {}
//     let str2Count = {}

//     for(let i = 0; i < str1.length; i++){
//         if(!str1Count[str1[i]]) str1Count[str1[i]] = 0
//         if(!str2Count[str2[i]]) str2Count[str2[i]] = 0
//         str1Count[str1[i]]++
//         str2Count[str2[i]]++
//     }

//     for(let ch in str1Count){
//         if(str1Count[ch] !== str2Count[ch]) {
//             return false
//          }
//     }
//     return true
// }

// console.log(permutation("grow", "rowg"))