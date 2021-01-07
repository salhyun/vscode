import {Node, LinkedList} from './LinkedList.js'

console.log('hello graph');

let linkedList = new LinkedList();
for(let i=0; i<10; i++) {
    linkedList.appendNode(i);
}

console.log('getAllNode =', linkedList.getAllNode());
linkedList.removeNode(5);
linkedList.removeNode(6);
console.log('getAllNode =', linkedList.getAllNode());

// linkedList.tourAllNode(node => {
//     console.log('node item =', node.item);
// })

console.log('good bye');