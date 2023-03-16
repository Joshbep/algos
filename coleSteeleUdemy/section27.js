//GRAPH TRAVERSAL

//graph traversal uses
//peer to peer networking
//web crawlers
//finding closest matches/recommendations
//shortest path problems
  //gps navigation
  //solving mazes
  //AI (shortest path to win the game)

//DEPTH FIRST SEARCH
//DFS Pseudocode
//DFS(vertex):
  //if the vertex is empty
    //return base case
  //add vertex to results list
  //mark vertex as visited
  //for each neighbor in vertex's neighbors:
    //if neighbor is not visited:
      //recursively call DFS on neighbor

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
