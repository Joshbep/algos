// a hash function is where you put in a string and get backa number
//in technical terms it maops strings to numbers

//put a hash function and an array together and you get a hash table

//5.1
//consistent
//not consistent
//not consistent
//consistent

const phoneBook = new Map();

phoneBook.set("jenny", "8675309")
phoneBook.set("emergency", "911")

console.log(phoneBook.get("emergency"));
