class directed {
  constructor() {
    this.vertices = {};
  }
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = new Set();
    }
  }
  addEdge(fromVertex, toVertex) {
    if (!this.vertices[fromVertex]) {
      this.addVertex(fromVertex);
    }
    if (!this.vertices[toVertex]) {
      this.addVertex(toVertex);
    }
    this.vertices[fromVertex].add(toVertex);
  }
  isCyclic() {
    let visited = new Set();
    let stack = new Set();

    const checkCyclic = (vertex) => {
      visited.add(vertex);
      stack.add(vertex);

      for (const edge of this.vertices[vertex]) {
        if (!visited.has(edge)) {
            if (checkCyclic(edge)) {
                return true;
          }
        } else if (stack.has(edge)) {
            return true;
        }
        }
        stack.delete(vertex);
        return false;
    };

    for (const vertex in this.vertices) {
      if (!visited.has(vertex)) {
        if (checkCyclic(vertex)) {
          return true;
        }
      }
    }
    return false;
  }
}

const newGraph = new directed()
newGraph.addEdge("A", "B")
console.log(newGraph.isCyclic());