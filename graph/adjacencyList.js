class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = new Set();
    }
    if (!this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = new Set();
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("A", "D");
graph.addEdge("A", "D");
graph.addEdge("B", "C");

graph.display();
// console.log(graph.hasEdge("A", "B"));
// console.log(graph.hasEdge("B", "C"));
// graph.removeVertex("A")
// graph.display();

