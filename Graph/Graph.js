import {Stack} from './Stack.js'
import {Queue} from './Queue.js'
import {LinkedList} from './LinkedList.js'

class Graph {
  constructor() {
    this.nodes = [];
  }
  addNode(item) {
    let Node = function(item) {
      this.item = item;
      this.visited = false;
      this.adjacent = new LinkedList();
    }
    this.nodes.push(new Node(item));
  }
  findNode(item) {
    for(let node of this.nodes) {
      if(node.item === item) {
        return node;
      }
    }
    return null;
  }
  addEdge(item1, item2) {
    let node1 = this.findNode(item1);
    let node2 = this.findNode(item2);
    if(node1 !== null && node2 !== null) {
      node1.adjacent.appendNode(node2);
      node2.adjacent.appendNode(node1);
    }
  }
  dfs(index, what) {
    let root = this.nodes[index];
    let stack = new Stack();
    stack.push(root);
    root.visited = true;
    while(stack.size() > 0) {
      let node = stack.pop();
      node.adjacent.tourAllNodes(n => {
        if(n.visited === false) {
          n.visited = true;
          stack.push(n);
        }
      })
      what(node);
    }
  }
  bfs(index, what) {
    let root = this.nodes[index];
    let queue = new Queue();
    queue.enqueue(root);
    root.visited = true;
    while(queue.size() > 0) {
      let node = queue.dequeue();
      node.adjacent.tourAllNodes(n => {
        if(n.visited === false) {
          n.visited = true;
          queue.enqueue(n);
        }
      })
      what(node);
    }
  }
}
export {Graph}