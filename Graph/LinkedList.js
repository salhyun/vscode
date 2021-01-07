class LinkedList {
  constructor() {
    this.head = null;
  }
  findPreviousNode(item) {
    let node = this.head;
      while(node !== null && node.next.item !== item) {
        node = node.next;
      }
      return node;
  }
  appendNode(item) {
    class Node {
      constructor(item) {
        this.item = item;
        this.next = null;
      }
    }
    let newNode = new Node(item);
    if(this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
  }
  removeNode(item) {
    let node = this.findPreviousNode(item);
    if(node !== null) {
        node.next = node.next.next;
    }
  }
  getAllNode() {
    let allNodes = [];
    let node = this.head;
    while(node !== null) {
      allNodes.push(node.item);
      node = node.next;
    }
    return allNodes;
  }
  tourAllNode(what) {
    let node = this.head;
      while(node !== null) {
        what(node);
        node = node.next;
      }
  }
}
export {LinkedList}