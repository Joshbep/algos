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
consts["fin"] = Infinity;

const paretns = {}
