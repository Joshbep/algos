//singly linked lists

//objectives
//define what a singly linked list is
//compare and contrast linked lists with arrays
//implement insertion, removal and traversal methods on singly linked lists


//what is a linked list?

//a data structure that contains a head, tail and length property.
//linked lists consist of nodes, and each node has a value and a pointer to another node or null
//singly linked lists only goes one way


//comparisons with arrays

//lists
//do not have indexes
//connected vio nodes with a next pointer
//random access is not allowed

//arrays
//indexed in order
//insertion and deltion can be expensive
//can quickly be accessed at a specific index

class Node{
  constructor(val){
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList{
  constructor(){
    this.lenth = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){

  }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
//
// list.push("you")

let list = new SignlyLinkedList()
list.push("hello")
list.push("goodbye")


//pushing
//adding a new node to the end of the linked list

//pushing pseudocode
//this function should accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and tail ton be the newly created node
