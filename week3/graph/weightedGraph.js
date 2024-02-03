class graph {
  constructor(directed = false) {
    this.directed = directed;
    this.vertices = {};
  }
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = new Set();
    }
  }
  addEdge(fromVertex, toVertex, weight) {
    if (!this.vertices[fromVertex]) {
      this.addVertex(fromVertex);
    }
    if (!this.vertices[toVertex]) {
      this.addVertex(toVertex);
    }
    this.vertices[fromVertex][toVertex] = weight;
    if (!this.directed) {
      this.vertices[toVertex][fromVertex] = weight;
    }
  }
  display() {
    let result = "";
    for (let vertex in this.vertices) {
      result += `${vertex}-->${JSON.stringify(this.vertices[vertex])}\n`;
      }
      console.log(result);
    }
    // removeVertex(vertex) {
    //     delete
    // }
}

const newGraph = new graph(true)
newGraph.addEdge("A", "B", 10)
newGraph.addEdge("A", "C", 5);
newGraph.display()