//intro to data structures

//data structures are collections of values, the rekationships among them, and the functions or operations that can be applied to the data.

//why so many?
//different data structures excel at different things.
//some are highly specialized, while others (like arrays) are more generally used

//learn singly linked lists

//learn doubly linked lists

//pay attention to the prereqs for each section

//ES2015
//class syntax

//objectives
//explain what a class is
//understand how javascript implements the idea od classes
//define terms like abstraction, encapsulation and polymorphism
//use es2015 classes ti implement data structures

//what is a class?
//a blueprint for creating objects with pre-defined properties and methods

//does javascript really have them?
//ehh.... not really

//why do we need to learn this?

//we're going to implement data structures as classes!

// the syntax

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores=[]
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    this.tardies+=1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score){
    this.scores.push(score);
    return this.scores
  }
  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b;})
    return sum/this.scores.length;
  }
}

//the method to create a new object must be called constructor
//the class keyword creates a constant, so you can not redefine it.
//watch out for the syntax as well.

//we use the new keyword
let firstStudent = new Student("Colt", "Steele", 4);
let secondStudent = new Student("Blue", "Steele", 2)
let kitty = new Student("kitty", "cat", 1)

//instance methods
firstStudent.fullName();
firstStudent.markLate();
