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
  get(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index <= this.length/2){
      let count = 0
      while(count !== index) {
        current = current.next;
        count++:
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while(count !== index) {
        current= current.prev;
        count--;
      }
      return current;
    }
  }
  set(index, val){
    let foundNode = this.get(index);
    if(foundNode !== null){
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.unshift(val);
    if(index === this.length) return this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(index -1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true
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

//pushing solution above ^^^


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


//get
//accessing a node in a doubly linked list by it;s position

//get pseudocode
//if the index is less than 0 or greater or equal to the length, return null

//if the index is less than or equal to half the length of the list
  //loop through the list starting from the head and loop towards the middle
  //return the node once it is found

//if the index is greater than half the length of th elist
  //loop through the list starting from the tail and loop towards the middle
  //return the node once it is found


//get solution above ^^

//set
//replacing the value of a node to the in a doubly linked list

//create a variable which is the result of the get method at the index
//passed to the function
    //if the get method returns a valid node, set the value of that node to be the value
    //passed to the function
    //return true

//return false

//set solution above ^^

//insert method
//adding a node in a doubly linked list by a certain position

//inserting psuedocode
//if the index is less than zero or greater than or equal to the length return false

//if th eindex is 0, unshift;
//if th eindex is the same as the length, push

//use the get method to access th eindex -1

//set the next and prev properties on the correct nodes to link
//everything together

//increment lenght

//return true

//insert solution above ^^^
