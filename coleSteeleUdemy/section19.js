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
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }
  traverse(){
    let current = this.head;
    while(current){
      console.log(current.val)
      current = current.next;
    }
  }
  pop(){
    if(!this.head) return undefined
    let current = this.head;
    let newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if(!this.head) return undefined
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead
  }
  unshift(val){
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
//
// list.push("you")

let list = new SinglyLinkedList()
list.push("hello")
// list.push("goodbye")


//pushing
//adding a new node to the end of the linked list

//pushing pseudocode
//this function should accept a value
//create a new node using the value passed to the function
//if there is no head property on the list, set the head and tail ton be the newly created node
//otherwise set the next property on the tail to be the new node and set the tail property on the list ot be the newly created node
//increment length by one
//return linked list


//popping
// //removing a node from the end of the linked list
// list.traverse();

//popping psuedocode
//if there are no nodes in the list. return undefined
//loop through the list until you reach the tail
//set the next property of the 2nd to last node to be null
// set the tail to be the 2nd to last node
//decrement the length of the list by 1
//return the value of the node removed


//shifting
//removing a new node from the begining of the linked list

//shifting pseudocode
//if there are no nodes return undefined
//store the current head property in a variable
//set the head property to be the current head's next property
//decrement the length by 1
//return the value of the node removed


//unshift
//adding a new node to the beginging of the linked list

//unshifting pseudocode
//this function should accept a value
//create a new node using the value passed to the function
//if there us no head property on the list, set the head and tail to be the newly created node
//otherwise set the newly created node's next property to
//be the current head property on the list
//set the head property on the list to be that newly created node

//unshift solution
