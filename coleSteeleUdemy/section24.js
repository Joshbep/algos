//BINARY HEAPS

//heaps are another category of trees

//focusing on Binary heap

//objectives
//define what a binary heap is
//compare and contrast min and max heaps
//implement basic methods on heaps
//understand whee heaps are used in the real world

//what is a binary heap?
//very similar to a binary search tree, but with some diferent rules!

//in a maxBinaryHeap, parent nodes are always larger than child nodes.
//In a MinBinaryHeap, parent nodes are always smaller than child nodes

// max has two children

//MAX BINARY HEAP

//each parent has at most two child nodes
//the value of each parent node is always greater than it's child nodes
//in a max binary heap the parent is greater than the children, but there are no guarantees
//between sibling nodes
//a binary heap is as compact as possible. All the children of each node are as full
//as they can be and left children are filled out first

//max binary
//left and right children will be smaller
//no relationship between siblings

//min binary
//left and right are lager than parent
//no relationship between siblings

//why should we care?
//binary heaps are used to implement priorty queues
//which are very commonly used data structures
//they are also used quite a bit, with graph traversal algos

//representing heaps
//theres an easy way pf storing a binary heap
//A LIST/ARRAY

//representing a heap

//for any index of an array n...
//the left child is tored at 2n + 1
//the right child is at 2n + 2

//what if we have a child node and want to find it's parent
//for any child at index n...
//it's parent is at index (n-1)/2

//defining our class
 class MaxBinaryHeap {
   constructor {
     this.values = [];
   }
   insert(element){
    this.values.push(element)
    this.bubbleUp();
   }
   bubbleUp(){
     let idx = this.value.length - 1;
     const element = this.values[idx]
     while(idx > 0){
       let parentIdx = Math.floor((idx - 1)/2);
       let parent = this.values[parentIdx];
       if(element <= parent) break;
       this.values[parentIdx] = element
       this.values[idx] = parent;
       idx = parentIdx
     }
   }
   extractMax(){
     const max = this.values[0];
     const end = this.values.pop()
     if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
     }
     return max;
   }
   sinkDown(){
     let idx = 0;
     const length = this.values.length;
     const element = this.values[0];
     while(true){
       let leftChildIdx = 2 * idx + 1;
       let rightChildIdx = 2 * idx + 2;
       let leftChild,rightChild;
       let swap = null;

       if(leftChildIdx < length){
         leftChild = this.value[leftChildIdx];
         if(leftChild > element){
           swap = leftChildIdx
         }
       }

       if(rightChildIdx < length){
         rightChild = this.values[rightChildIdx];
         if((swap === null && rightChild > element) ||
         (swap !== null && rightChild > leftChild)
       ){
          swap = rightChildIdx;
         }
       }

       if(swap === null) break;
       this.values[idx] = this.values[swap];
       this.values[swap] = element;
       idx = swap;
     }
   }
 }

 //adding to a MaxBinaryHeap
 //add to the end
 //bubble up

 //insert psuedocode
 //push the value into the values property on the heap
 //bubble the value up to its correct spot!

 //removing from a  heap

 //remove the root
 //replace with the most recently added
 //adjust (sink down)


//REMOVING
//(also called extractMax)
//swap first value in the values property with the last one
//pop from the values property, so you can return the value at the end
//have the new root sink down tot he correct spot

//building a priorty queue
//what is a priorty queue
//a data structure whee each emelent has a priorty emelements with
//higher priorties are served before elements with lower priorties
