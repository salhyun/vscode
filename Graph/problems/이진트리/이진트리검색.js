import {BinaryTree} from './../../BinaryTree.js'
let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// data = [];
// for(let i=0; i<1000; i++) {
//   data.push(i);
// }

let tree = new BinaryTree();
tree.make(data);
let findItem = tree.findItem(7);
console.log('findItem =', findItem);

data = [];
for(let i=0; i<9; i++) {
  data.push(i);
}
let tree1 = new BinaryTree();
tree1.make(data);

console.log(' ');
data = [];
for(let i=5; i<9; i++) {
  data.push(i);
}
let tree2 = new BinaryTree();
tree2.make(data);
tree2.tourAll(item => {
  console.log('visited item =', item);
});
let findNode = tree1.tour(tree1.findNode(7), item => {
  console.log('visited item =', item);
})

let shape = [];
tree2.treeShape(tree2.root, (node, left) => {
  shape.push({item: node.item, left: left, parentItem: node.parent ? node.parent.item : null});
})
console.log('tree2 shape =', shape);

tree1.treeShape(tree1.findNode(7), (node, left) => {
  let a = {item: node.item, left: left, parentItem: node.parent ? node.parent.item : null};
  console.log('shape =', a);
});


console.log('goodboy');