// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


function order(words) {
  //split up the array of words and sort
  return words.split(' ').sort(function(a,b) {
    //sort in ascending order and use .match() to find number
    //.match(/\d/) find number .match(/\D/) find letters and characters not numbers
    return a.match(/\d/) - b.match(/\d/)
    //then join back with space inbetween words
  }).join(' ')
}
