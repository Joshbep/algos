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
