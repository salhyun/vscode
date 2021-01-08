import {Stack} from './Stack.js'

class Queue {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }
  enqueue(item) {
    this.in.push(item);
  }
  dequeue() {
    if(this.out.size() === 0) {
      while(this.in.size() > 0) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
  size() {
    return this.in.size() + this.out.size();
  }
}
export {Queue}