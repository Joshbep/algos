//Hash tables

//pre regs
//big O
//DATA structures intro

//objectives
//explain hash table
//define hashing algo
//discuss what makes a good hashing algo

//what is a hash table?
//hash tables are used to store key-value pairs
//they are like arrays, but the keys are not ordered
//inlike arrays, hash tables are fast for all of the following operations: finding valyes,
//adding new values, and removing values!

//why should I care?
//nearly every programming language has some sort of hash table data structure
//becasue of their speed, hash tables ar every commonly used

//hash tables in the wild
//puython has dictionaries
//js has objects and maps*
//java, go and scala have maps
//ruby has... Hashes

//objects have some restrictions, but are basically hash tables

//HASH TABLES
//intro example
//imagine we want to store some colors
//we could just use an array/list:
//["#ff69b9", "#ff4500"]

//not super readable! what do these colors correspond to?

//it would be nice if instead of using indices to access the colors, we could use more human readable keys

//colors["cyan"]
//IS WAY BETTER THAN
//colors[2]

//the hash part
//to implement a hash table, we'll be using an array

//what makes a good hash?
//1.FAST(constant time)
//2.Doesn't cluster outputs as specific indices, but distributes uniformly
//3.deterministic(same input yields same output)

// function hash(key, arrayLen) {
//   let total = 0;
//   for(let char of key) {
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }

//refining our hash

// function hash(key, arrayLen) {
//   let total = 0;
//   let WEIRD_PRIME = 31;
//   for(let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i]
//     let value = char.charCodeAt(0) - 96
//     total = (total + WEIRD_PRIME + value) % arrayLen;
//   }
//   return total;
// }

//dealing with collisions
//even with a large array and a great hash function, collission are inevitable

//there are manyb strategies for dealing with collisions, but we'll focus on two:
//1. seperate chaining
//2. Linear probing

//seperate chaining
//with seperate chaining, at each index in our array we store values using a more sophisticated data structure (an array or a linked list).
//this allows to store multiple key value pairs at the same index

//linear probing
//with linear probing, when we find a collission, we search through the array to find the next empty slot
//unlike with a seperate chaining, this allows us to store a single key-value at each index

//set/get
//SET
//1. accepts a key and a value
//2. hashes the key
//stores the key-value pair in the hash table array via seperate chaining

//GET
//1.accepts a key
//2.hashes the key
//3.retrives the key-value pair in the hash table
//4.if the key isn't found, returns undefined

class HashTable {
  constructor(size=17) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])
  }
  get(key) {
    let index = this._hash(key)
    if(this.keyMap[index]){
      for(let i = 0; i < this.keyMap[index].length; i++){
        if(thi.skeyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values(){
    let valuesArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        console.log(this.keyMap[i])
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1]))
          valuesArr.push(this.keyMap[i][j][1])
        }
      }
    }
    return valuesArr;
  }
  keys(){
    let keysArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        console.log(this.keyMap[i])
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0]))
          keysArr.push(this.keyMap[i][j][0])
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!")


//BIG O of HASH TABLES

//INSERT: O(1)
//DELETION: O(1)
//ACCESS: O(1)
