//BFS is shortest path doesn't mean fastest
//if you want to find the fastest you can use a different algorithm called Dijkstra’s algorithm.
//with Dijkstra’s algorithm each edge in a graph has a number associated with it which is a weight
//a graph with weights is called a weighted graph
//A graph without weights is called an unweighted graph.

// if it is unweighted to calculate the shortest path use breadth first search

//to calculate the shortest path in a weighted graph use Dijkstra’s algorithm

//an undirected graph means that both notes point to each other
//thats a cycle!

//Dijkstra’s algorithm only works with directed acyclic graphs, called DAGs for short.

const graph = {};

graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2

graph["a"] = {}
graph["a"]["fin"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 1

graph['fin'] = {};

const costs = {}

costs["a"] = 6
costs["b"] = 2
costs["fin"] = Infinity;

const parents = {}
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

processed = []

const findLowestCostNode = (costs) => {
  lowestCost = Infinity;
  lowestCostNode = null;
  for(let node in costs) {
    let cost = costs[node];
    if(cost < lowestCost && (processed.indexOf(node) === -1)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let node = findLowestCostNode(costs)

while(node != null) {
  let cost = costs[node];
  let neighbors = graph[node];
  Object.keys(neighbors).forEach(function(neighborNode) {
    let newCost = cost + neighbors[neighborNode];
    if(costs[neighborNode] > newCost) {
      costs[neighborNode] = newCost;
      parents[neighborNode] = node;
    }
  });
  processed = processed.concat(node);

  node = findLowestCostNode(costs);
}

console.log(costs, parents, graph)

//7.1
//a
//8
//b
//60
//c
//no shortest path possible negative weight cycle

//breadth first search is used to calcultae the shortest path for an unweighted graph
//Dijkstra’s algorithm is used to calculate the shortest path for a weighted graph
//Dijkstra’s algorithm works when all weights are positive
//if you have negative weights use the Bellman-Ford algorithm.
