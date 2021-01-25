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
export {BinaryTree}
