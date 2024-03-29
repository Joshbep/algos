//STACKS
//objectives

//define what a stack is
//understand use cases for a stack
//implement operations on a stack data structure

//what is a stack?

// A LIFO data strcuture

//the last element added to the stack will be the first element
//removed from the STACK

//think about a stack of plates, or a stack of markers, or stack of anything
//as you pile it up the last thing(or the topmost thing) is what gets removed first

//weve seen this before
//the call stack

//where stacks are used

//managing function invocations
//Undo/Redo
//routing (the history object) is treated like a stack!

//lesson 2
//there is more than one way of implementing a stack
//javascript does not come with a pre built stack implementation

// let stack = [];
// stack.push("google")
// stack.push("instagram")
// stack.push("youtube")
// console.log(stack)
// stack.pop();
// console.log(stack)

// stack.unshift("create file");
// stack.unshift("resized file");
// stack.unshift("cloned out wrinkle");
// console.log(stack)
// stack.shift();
// console.log(stack)

//in an array adding to begining is not best
//big O there would be 0(n)


//writing our own stack from scratch
//linked list implementation
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// class Stack {
//   constructor(){
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val){
//     let newNode = new Node(val);
//     if(!this.first){
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       //prev first set to temp
//       let temp = this.first;
//       // new first = newNode
//       this.first = newNode;
//       //newfirst.next = temp which is old first
//       this.first.next = temp
//     }
//     return ++this.size;
//   }
//   pop(){
//     if(this.size === 0) return null;
//     let temp = this.first;
//     if(this.first === this.last){
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.val;
//   }
// }

// let stack = new Stack();
// stack.push("FIRST")
// stack.push("SECOND")
// stack.push("THIRD")
// stack.push("FOURTH")
// console.log(stack)
// stack.pop()
// console.log(stack)

//BIG O OF STACKS

//insertion - O(1)
//Removal - O(1)
//Searching O(N)
//Access - O(N)

//RECAP
//stacks are a LIFO last in first out
//Stacks are used to ahndle function invocations for operations like undo/redo
//and for routing and much more
///they are not a built in data strucure in javascript, but htey are relativel simple to implement


//QUEUES
//objectives
//define queue
//understand use cases for a queue
//implement operations ona  QUEUE data strcuture

//what is a QUEUE
//FIFO data structure
//First in first out
//weve seen this before
//QUEUES exist everhwere! think about th elast time yoi waited in line...

//How do we use them in programming?
//background tasks
//uploading resources
//printing/task processing


//BUILDING A QUEUE WITH AN ARRAY

// let q = [];

// q.push("first")
// q.push("second")
// q.push("third")
// console.log(q)
// q.shift()
// //removing from beginging makes this a queue
// console.log(q)

// q.unshift("first")
// q.unshift("second")
// q.unshift("third")
// console.log(q)
// q.pop()
// console.log(q)

//building a QUEUE class

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    let newNode = new Node(val);
    if(this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

//BIG O of QUEUES

//insertion - O(1)
//removal - O(1)
//searching O(N)
//Access - O(N)

//RECAP
//QUEUES are a FIFO data structure, all elements are first in first out
//queues are useful for processing tasks and are foundational for more complex data strcutures
