//Start of Doubly Linked Lists

//Objectives
//contruct a doubly linked list
//compare and contrast doubly and singly linked lists
//implement basic operations on a dobuly linked list

//almost identical to singly linked lists, except every node has another pointer, to the previous node

//you can not remove tail in singly linked list
//you can remove tail in doubly linked lists because a doubly linked list goes both ways

//code may be more complicated, bc we are keeping up with two pointers
//it takes up more memory

//comparisons with singly linked lists
//more memory === more flexibility
//it's almost always a tradeoff

//Node
//val
//next
//prev

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//DoublyLinkedList
//head
//tail
//length

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if(this.length === 0) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

//pushing psuedocode
//create a new node witht he value passed to the function

//if the head property is null set the head and tail
//to be the newly created node

//if not, set the next property on the tail to be that node

//set the previous property on the newly created node to be the tail

//set the tail to be the newly created node

//increment the length

//return the doubly linked list

//puhsing solution above ^^^


//popping
//removing a node from the end of the doubly linekd lists

//popping psuedocode

//if there is no head, return undefined

//store the current tail in a variable to return later

//if the length is 1, set the head and tail to be null

//update the tail to be the previous node

//set the newTail's next to null

//decrement the length

//return the value removed


//pop solution above ^^

//shifting
//removing a node from the begining of the doubly linked list

//shifting pseudocode
//if length is 0, return undefined

//store current head property in a variable (we'll call it old head)

//if the length is one
  //set the head to be null
  //set the tail to be null

//update the head to be next of the old head

//set the head's prev property to null

//set the old head's next to null

//decrement length

//return old head

//shift solution above ^^

//unshift
//create a new node with the value passed to the function

//unshift pseudocode

//create a new node with the value passed to the function

//if the length is 0
  //set the head to be th enew node
  //set the tail to be the new node
//otherwise
  //set the prev property on the head of the list to be the new node
  //set the next property on the new node to be the head property
  //update the head to be the new node


//unshift solution above ^^
