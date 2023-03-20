//DIJKSTR'S ALGO
//OBJECTIVES
//understand the importance of DIJKSTRA'S
//implement weighted graph
//walk through the steps of DIJKSTR
//implement using a naive priorty queue

//what is it?
//one of the most famous and widely used algos around
//find the shortest path between two vertices ona graph
//what's the fastest way to get from point A to point B

//Who was he?
//edsger dijkstra was a dutch programmer, physicist essayist, and all around smarty pants

//he helped to advance the field of computer science from an "art" to an academic discipline

//why is it useful?
//GPS
//network routing
//biology - used to model the spread of viruses among humans
//airline tickets
//many other uses

//write  a weighted graph

class WeightedGraph {
  constrcutor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push[{node:v2, weight}]
    this.adjacencyList[v2].push[{node:v1, weight}]
  }
}

//Now on to Dijkstra's


//a simple PQ
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}
