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
  DFSR(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList

      (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacentList[vertex].forEach(neighbor => {
          if(!visited[neighbor]){
            return dfs(neighbor)
          }
        });

      })(start)

    return result;
  }
  DFSI(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
    return result;
  }
  BFS(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex
    visited[start] = true;

    while(queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }
  }
}

//Depth first traversel recursively


//DFS PSEUDOCODE ITERATIVE
//DFS-iterative(start):
  //let S be a stack
  //S.push(start)
  //while s is not empty
    //vertex = S.pop()
    //if vertex is not labeled as discovered:
    //visit vertex (add to result list)
    //label vertex as discovered
    //for each of vertex's neighbors, N do S.push(N)

//BREADTH FIRST
//VISIT NEIGHBORS AT CURRENT DEPTH FIRST
//then move on

//BREADTH FIRST
//this function should accept a starting vertex
//create a queue (you can use an array) and place the starting vertex in it
// create an array to store nodes visited
// crate an object to store nodes visited
//mark the starting vertex as visited
//loop as long as there is anything in the queue
//remove the first vertex from the queue and push it into the array that sores nodes visited
//loop over each vertex in the adjacency list for the vertex you are visiting
//if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
//once done looping, return the array of visited nodes
