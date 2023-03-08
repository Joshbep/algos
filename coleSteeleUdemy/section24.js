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
//or (n-2)/2
