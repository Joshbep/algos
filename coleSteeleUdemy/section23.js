//tree traversal

//traverse a tree
//TWO WAYS:
//BFS(Breadth-first Search)
//DFS(Depth-first Search)

//BFS

//DFS - in order

//BFS
//visit every node on the same level before moving to child

//BFS
//steps

//Create a queue(this cna be an array) and a  variable to store the values of nodes visited
//Place the root node in the queue
//loop as long as there is anything in the queue
  //dequeue a node

//BFS solution

//
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
  BFS(){
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(this.root);
    while(queue.length){
        node = queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder(){
    let data = [];
    let current = this.root;
    function traverse(node){
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  DFSPostOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse node.left;
      if(node.right) traverse node.right;
      data.push(node.value)
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder(){
    let data = [];
    function traverse(node){
      if(node.left) traverse node.left;
      if(node.right) traverse node.right;
      data.push(node.value)
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();


//DFS
//visits vertically down, before visiting sibling nodes
//steps recursively
//create a variable to store
//store the root
//write second helper function
//invoke helper function
//return the array of values

//DFS - preorder solution above!

//DFS - postorder solution above


//DFS - Inorder solution above
