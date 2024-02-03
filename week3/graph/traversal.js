class graph {
  constructor() {
    this.vertices = {};
  }
  addvertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1]) {
      this.vertices[vertex1] = new Set();
    }
    if (!this.vertices[vertex2]) {
      this.vertices[vertex2] = new Set();
    }
    this.vertices[vertex1].add(vertex2);
    this.vertices[vertex2].add(vertex1);
  }
  bfs(starting) {
    const queue = [starting];
    const visited = new Set();
    const result = [];
    visited.add(starting);
    while (queue.length > 0) {
      const curr = queue.shift();
      result.push(curr);
      for (let vertex of this.vertices[curr]) {
        if (!visited.has(vertex)) {
          visited.add(vertex);
          queue.push(vertex);
        }
      }
    }
    return result;
  }
  dfs(starting, visited = new Set()) {
    if (!this.vertices[starting]) return;
    visited.add(starting);
    console.log(starting);
    for (let neighbour of this.vertices[starting]) {
      if (!visited.has(neighbour)) {
        this.dfs(neighbour, visited);
      }
    }
    // for (let vertex in this.vertices) {
    //   if (!visited.has(vertex)) {
    //     this.dfs(vertex, visited);
    //   }
    // }
  }
  display() {
    for (let vertex in this.vertices) {
      console.log(`${vertex} => ${[...this.vertices[vertex]]}`);
    }
  }
}
const newGraph = new graph();
newGraph.addEdge("A", "B");
newGraph.addEdge("D", "B");
newGraph.addEdge("E", "B");
newGraph.addEdge("A", "D");
newGraph.addEdge("C", "B");
newGraph.addEdge("A", "E");
newGraph.addEdge("A", "E");

newGraph.addEdge("A", "A");
console.log(newGraph.bfs("A"));
newGraph.dfs("A");
newGraph.display();
