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
