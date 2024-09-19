// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//       }
//     }
  
//     printGraph() {
//       for (const vertex in this.adjacencyList) {
//         console.log(`⁠ ${vertex} -> ${this.adjacencyList[vertex].join(', ')} ⁠`);
//       }
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "C");
  
//   graph.printGraph();












// class Graph {
//     constructor() {
//       this.adjacencyList = {};
//     }
  
//     addVertex(vertex) {
//       if (!this.adjacencyList[vertex]) {
//         this.adjacencyList[vertex] = [];
//       }
//     }
  
//     addEdge(vertex1, vertex2) {
//       if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//       }
//     }
  
//     dfs(start) {
//       const result = [];
//       const visited = new Set();
  
//       const dfsHelper = (vertex) => {
//         if (!vertex) return;
//         visited.add(vertex);
//         result.push(vertex);
  
//         this.adjacencyList[vertex].forEach(neighbor => {
//           if (!visited.has(neighbor)) {
//             dfsHelper(neighbor);
//           }
//         });
//       };
  
//       dfsHelper(start);
//       return result;
//     }
//   }
  
//   // Example usage:
//   const graph = new Graph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addEdge("A", "B");
//   graph.addEdge("A", "C");
//   graph.addEdge("B", "C");
  
//   console.log(graph.dfs("A"));














class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
      }
    }
  
    bfs(start) {
      const result = [];
      const visited = new Set();
      const queue = [start];
  
      visited.add(start);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        result.push(vertex);
  
        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  
  console.log(graph.bfs("A"));


