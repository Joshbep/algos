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
  get(index){
    if(index < 0 || idndex >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode){
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index){
    if( index < 0 || index >= length) return null;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for(let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
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

//unshift solution above in class

//get method
//retrieving a node by it's position in the linked list!

//get pseudocode
//this function should accept an index

//if the index is less than zero or greater than or equal
//to the length of the list, return null

//loop through the list until you reach the index and
//returnn the node at that specific index

//get solution above

//set method
//changing the value of a node based on it's position in the linked list

//set pseudocode
//this function should accept a value and an index

//use your get function to find the specific node

//if the node is not found return false

//if the node is found, set the value of that node to be the value passed to the function and return true


//insert
//addind a node to the linked list at a specific position

//insert pseudicode

//if the index is lesss than zero or greater than the length, return false

//if the index is the same as the length, push a new node to the end of the list

//if the index is 0, unshift a new node to the start of the list
//otherwise, using the get method, access the node at the index -1

//set the next propoerty on that node to be the new node
//set the next property on the new node to be the previous next

//increment the length
//return true


//Remove
//remove a node from the linked list at a specific postiion

//remove pseudocode
//if the index is less than zero or greater than the lenght,
//return undefined

//if the index is the same as the length-1, pop

//if the index is 0, shift

//otherwise, using the get method, access the node at the index -1

//set the next property on that node to be the next node

//decrement the length

//remove solution above ^^

//reverse
//reversing the linked list in place!

//reversing pseudocode
//swap teh head and tail
//create a variable called next
//create a variable called prev
//created a variable called node and intiialize it to the head property
//loop through the list
//set next to be the next property on whatever node is


//reverse solution

//big O of singly linked lists
//insertion - O(1)
//removal - it deoends... O(1) or O(n)
//searching - O(N)
//Access - O(N)

//recap
//singly linked lists are an excellent alternative to arrays
//when insertion and deletion at the begninning are freqently required

//arrays contain a built in index wheras linked lists do not

//the idea of a list data structure that consists of nodes is the foundation for other data strcutures
//like stacks and queues
