//Binary search trees

//objectives
//define what a tree is

//compare and contrast trees and lists

//explain the differences between trees, binary trees, and binary search trees

//implement operations on BST (binary search trees)

//WHAT IS A TREE

//a data structure that consists of nodes ina  parent/child relationship


//lists - linear

//tree - nonlinear

//a singly linked list
//(sort of special case of a tree)

//a node can only point to a child

// can only have one root

//TREE TERMINOLOGY

//ROOT - The top node in a tree
//CHILD - A node directly connected to another node when moving away from the root
//PARENT -  The converse notion of a child
// SINLINGS - a group of nodes with the same parent
//LEAF - a node with no children
//EDGE - the connection between one node and another


//TREES

//lots of different applications
//HTML DOM
//network routing
//abstract syntax trees
// AI
//Folders in operating systems
//JSON


//KINDS OF TREES
//trees
//binary trees

//each node can have at most 2 children
//bi = 2

//binary search trees
//each node can have at most 2 children
//bi = 2
//left is always smaller than parent
//right is always larger than parent


//pop quiz
//no
//6 is smaller on right of 8

//no 3 children on root

//no
//4 is bigger on left of 3


//HOW BSTS work
//parent has 2 children
//child left has to be smaller
//child right has to be greater

//OUR TREE CLASS

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this;
    } else {
      let current = this.root
      while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value){
          if(current.right === null){
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value){
    if(this.root === null) return false;
    let current = this.root,
      found = false
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return false;
    return current;
  }
}

let tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right =  new Node(9);

//insert solution above ^^

//finding a node in a BST
//FIND solution above ^^^


//BIG O
//insertion - O(log n)
//Searching - O(log n)

//worst case
