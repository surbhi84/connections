interface adjacencyListValueType {
  friends: string[];
  parent: string;
  visited: boolean;
}
class Graph {
  visited?: boolean;
  adjacencyList: Map<string, adjacencyListValueType>;

  constructor() {
    this.adjacencyList = new Map<string, adjacencyListValueType>();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, {
        friends: [],
        parent: "",
        visited: false,
      });
    }
  }

  addEdge(source: string, target: string) {
    let sourceNode = this.adjacencyList.get(source);
    let targetNode = this.adjacencyList.get(target);

    if (sourceNode !== undefined && !sourceNode.friends.includes(target)) {
      this.adjacencyList.set(source, {
        ...sourceNode,
        friends: [...sourceNode.friends, target],
      });
    }

    if (targetNode !== undefined && !targetNode.friends.includes(source)) {
      this.adjacencyList.set(target, {
        ...targetNode,
        friends: [...targetNode.friends, source],
      });
    }
  }
}
export default Graph;
