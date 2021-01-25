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

graph.dfs(3, node => {
  console.log(`dfs node item=${node.item}, visited=${node.visited}`);
})

graph.nodes.forEach(node => {
  node.visited = false;
})
console.log(' ');
graph.bfs(0, node => {
  console.log(`bfs node item=${node.item}, visited=${node.visited}`);
})
graph.nodes.forEach(node => {
  node.visited = false;
})
console.log(' ');
graph.dfsR(0, node => {
  console.log(`dfsR node item=${node.item}, visited=${node.visited}`);
})
//미로찾기
let maze = {width: 6, height: 4,
  data: [
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1]
  ],
  getIndex: function(x, y) {return y*this.width+x},
  getCoord: function(index) {return {x: index%this.width, y: parseInt(index/this.width)}},
  getDataFromCoord: function(coord) {return this.data[coord.y][coord.x]},
  getDataFromIndex: function(index) {
    if(index >= 0 && index < graph.nodes.length) {
      let coord = this.getCoord(index);
      return this.data[coord.y][coord.x];
    }
    return 0;
  }
};

graph = new Graph();
for(let y=0; y<maze.height; y++) {
  for(let x=0; x<maze.width; x++) {
    graph.addNode(maze.getIndex(x, y));
  }
}

function makeEdge(centerIndex, coord) {
  if(centerIndex == 3) {
    console.log(' ');
  }
  let coords = [{x: coord.x, y: coord.y-1}, {x: coord.x-1, y: coord.y}, {x: coord.x, y: coord.y+1}, {x: coord.x+1, y: coord.y}];
  coords.forEach(element => {
    if(element.x >= 0 && element.x < maze.width && element.y >= 0 && element.y < maze.height) {
      if(maze.getDataFromCoord(element) > 0) {
        graph.addEdge(centerIndex, maze.getIndex(element.x, element.y));
      }
    }
  })
}
for(let i=0; i<graph.nodes.length; i++) {
  if(maze.getDataFromIndex(i) > 0) {
    makeEdge(i, maze.getCoord(i));
  }
}
let pathCount=0;
graph.dfs(0, node => {
  let coord = maze.getCoord(node.item);
  console.log('coord =', coord);
  pathCount++;
  if(coord.x == 5 && coord.y == 3) {
    console.log('find goal =', pathCount);
  }
})

graph.nodes.forEach(node => {
  node.visited = false;
})

pathCount=0;

(function findPath(node) {
  if(node !== null) {
    node.visited = true;

    if(node.adjacent.head !== null) {
      pathCount++;
      let coord = maze.getCoord(node.item);
      if(coord.x == 5 && coord.y == 3) {
        console.log('findPath count =', pathCount);
      }
    }
    node.adjacent.tourAllNodes(n => {
      if(n.visited === false) {
        findPath(n);
      }
    })
  }
})(graph.nodes[0]);

console.log('good bye');
