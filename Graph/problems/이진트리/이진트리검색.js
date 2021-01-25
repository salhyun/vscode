let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// data = [];
// for(let i=0; i<1000; i++) {
//   data.push(i);
// }

class BinaryTree {
  constructor() {
    this.root = null;
  }
  make(data) {
    function Node(item) {
      this.item = item;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
    this.root = (function recursive(node, start, end) {
      if(start < end) {
        let index = parseInt(start + (end-start)/2);
        node = new Node(data[index]);
        console.log(`index=${index}, node item=${node.item} start=${start} end=${end}`);

        node.left = recursive(node.left, start, index);
        if(node.left !== null) node.left.parent = node;
        node.right = recursive(node.right, index+1, end);
        if(node.right !== null) node.right.parent = node;
        return node;
      }
      return null;
    })(this.root, 0, data.length);
  }
  findItem(what) {
    let item = null;
    (function recursive(node) {
      if(item !== null) return;
      console.log('visited node item =', node.item);
      if(what === node.item) {
        item = node.item;
        console.log('find item =', node.item);
      }
      else if(what < node.item) {
        if(node.left) recursive(node.left);
      } else {
        if(node.right) recursive(node.right);
      }
    })(this.root);
    return item;
  }
  findNode(what) {
    let resultNode = null;
    (function recursive(node) {
      if(resultNode !== null) return;
      if(what === node.item) {
        resultNode = node;
        console.log('find item =', node.item);
      }
      else if(what < node.item) {
        if(node.left) recursive(node.left);
      } else {
        if(node.right) recursive(node.right);
      }
    })(this.root);
    return resultNode;
  }
  tourAll(lamda) {
    (function recursive(node) {
      if(node !== null) {
        lamda(node.item);
        recursive(node.left);
        recursive(node.right);
      }
    })(this.root);
  }
  tour(node, lamda) {
    (function recursive(node) {
      if(node !== null) {
        lamda(node.item);
        recursive(node.left);
        recursive(node.right);
      }
    })(node);
  }
  treeShape(node, lamda) {
    (function recursive(node, left) {
      if(node !== null) {
        lamda(node, left);
        recursive(node.left, 1);
        recursive(node.right, 0);
      }
    })(node, null);
  }  
}

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