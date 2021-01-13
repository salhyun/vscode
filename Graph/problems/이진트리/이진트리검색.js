let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
data = [];
for(let i=0; i<1000; i++) {
  data.push(i);
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  make(data) {
    function Node(item) {
      this.item = item;
      this.left = null;
      this.right = null;
    }
    this.root = (function recursive(node, start, end) {
      if(start < end) {
        let index = parseInt(start + (end-start)/2);
        node = new Node(data[index]);
        //console.log(`index=${index}, node item=${node.item} start=${start} end=${end}`);

        node.left = recursive(node.left, start, index);
        node.right = recursive(node.right, index+1, end);
        return node;
      }
    })(this.root, 0, data.length);
  }
  find(what) {
    let findItem = null;
    (function recursive(node) {
      console.log('visited node item =', node.item);
      if(what === node.item) {
        findItem = node.item;
        console.log('find item =', node.item);
      }
      else if(what < node.item) {
        if(node.left) recursive(node.left);
      } else {
        if(node.right) recursive(node.right);
      }
    })(this.root);
    return findItem;
  }
}

let tree = new BinaryTree();
tree.make(data);
let findItem = tree.find(77);
console.log('findItem =', findItem);

console.log('goodboy');