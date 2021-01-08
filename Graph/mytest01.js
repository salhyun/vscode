import {Graph} from './Graph.js'

console.log('hello graph');

let graph = new Graph();
for(let i=0; i<9; i++) {
  graph.addNode(i);  
}
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(5, 6);
graph.addEdge(5, 7);
graph.addEdge(6, 8);

graph.dfs(0, node => {
  console.log(`dfs node item=${node.item}, visited=${node.visited}`);
})

graph.nodes.forEach(node => {
  node.visited = false;
})
console.log(' ');
graph.bfs(0, node => {
  console.log(`bfs node item=${node.item}, visited=${node.visited}`);
})

console.log('good bye');
