import {BinaryTree} from './BinaryTree.js'

(function climbStairs() {
  //let step = [10, 15, 20];
  let step = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
  let min = Number.MAX_SAFE_INTEGER;

  function steping(pos, sum) {
    if(pos < step.length) {
      sum += step[pos];

      steping(pos+1, sum);
      steping(pos+2, sum);
    } else {
      if(sum < min) {
        min = sum;
        console.log('min =', min);
      }
    }
  }

  steping(0, 0);
  steping(1, 0);

  console.log('LAST min =', min);
})();
