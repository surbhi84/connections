interface adjacencyListValueType {
  friends: Set<string>;
}

class Graph {
  adjacencyList: Map<string, adjacencyListValueType>;

  constructor() {
    this.adjacencyList = new Map<string, adjacencyListValueType>();
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, {
        friends: new Set(),
      });
    }
  }

  addEdge(source: string, target: string) {
    let sourceNode = this.adjacencyList.get(source);
    let targetNode = this.adjacencyList.get(target);

    if (sourceNode !== undefined && !sourceNode.friends.has(target)) {
      this.adjacencyList.get(source)?.friends.add(target);
    }

    if (targetNode !== undefined && !targetNode.friends.has(source)) {
      this.adjacencyList.get(target)?.friends.add(source);
    }
  }

  shortestPathBfs(start: string, target: string, queue: string[] = []) {
    queue = [start];
    let current: string;
    let visited = new Map<string, boolean>();
    let parent = new Map<string, string>();

    visited.set(start, true);

    if (start === target) return [start, start];

    while (queue.length > 0) {
      current = queue.shift() as string;
      const currentAdjacents = this.adjacencyList.get(current)?.friends;

      if (currentAdjacents !== undefined) {
        for (let i of currentAdjacents) {
          if (!visited.has(i)) {
            visited.set(i, true);
            parent.set(i, current);

            if (i === target) {
              let shortestPath = [i];
              let temp = current;
              while (temp !== start) {
                shortestPath.push(temp);
                temp = parent.get(temp) as string;
              }
              shortestPath.push(start);
              return shortestPath;
            }
            queue.push(i);
          }
        }
      }
    }
    return [];
  }

  getVertexes() {
    return Array.from(this.adjacencyList.keys());
  }
}

export default Graph;
