//GRAPHS

//objectives
//explain a graph
//compare and contrast different types of graphs and their use cases in rewal world
//implement a grpah using an adjacency list
//traverse through a graph using BFS and DFS
//compare and contrast grph traversal algos

//WHAT ARE GRAPHS
//a graph structure consists of a finite (and possible mutable) set of vehicles or nodes or points, together
//with a set of unorded pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph

//USES FOR GRAPHS
//social networks
//location / mapping
//routing algos
//visual hierarchy
//file system optimizations
//everywhere

//recommendations

//base definition

//it is a bunch of nodes iwht connections inbetween them

//TYPES OF GRAPHS
//essential graph terms
//vertex - a node
//edge - connection between nodes
//weighted/unweighted - values assigned to distances between vertices
//directed/undirected - directions assigned to distanced between vertices

//undirected graph
//no direction

//directed graph
//often represented with arrows
//has direction

//weighted graph
//each edge has value

//unweighted
//each edge has no value

//REPRESENTING A GRAPH

//adjacency matrix

//a matrix is a 2 dimensional structure typically implemented with nested arrays
//we store info in rows and columns

//ADJACENCY LIST

//WE WILL USE AN ADJACENCY LIST
//WHY?
//mainly the space it takes up
//most data in the real worl tends to lend itself to sparser and or larger graphs

//add vertex intro

//OUR GRAPH CLASS

//we are building an undirected graph

class Graph {
  constructor(){
    this.adjacentList = {}
  }
  addVertex(vertex){
    if(!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }
  addEdge(v1, v2){
    this.adjacentList[v1].push(v2)
    this.adjacentList[v2].push(v1)
  }
  removeEdge(v1, v2){
    this.adjacentList[v1] = this.adjacentList[v1].filter(
      v => v !== v2
    );
    his.adjacentList[v2] = this.adjacentList[v2].filter(
      v => v !== v1
    );
  }
  removeVertex(vertex){
    while(this.adjacenctList[vertex].length){
      coonst adjacentVertex = this.adjacentList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacentList[vertex]
  }
}

//adding a vertex
//write a method called addvertex
//it should add a key to the adjacent list witht he name of the vertex and set its calue to be an empty array


//ADDING AN EDGE
//this function should accepts two arguments
//function should find in the adjacency list the key of vertex1 and push vertex2 tot he array
//the function should find in the adjacency list the key of vertex2 and push vertex1 tot he array
//don't worry about handling errors/invalid vertices

//add edge solution above


//removing an edge
//this function should accept two vertices, we'll call them v1 and v2
//the function should reassign the key of vertex1 to be an array that does not contain vertex2


//REMOVING A VERTEX
//this funvtion should accept a vertex to remove
//this function should loop as long as there are any other vertices in the adjacency list for that vertex
//inside of the loop, call removeedge function
//delete key
