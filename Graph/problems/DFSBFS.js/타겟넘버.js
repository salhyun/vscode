let numbers = [1, 1, 1, 1, 1];
let target = 3;
let answer = 0;
let searchCount=0;

(function dfs(depth, sum) {
  // console.log(`depth=${depth}, sum=${sum}`);
  searchCount++;
  if(depth >= numbers.length) {
    if(sum === target) {
      answer++;
    }
    return;
  }
  dfs(depth+1, sum + numbers[depth]);
  dfs(depth+1, sum - numbers[depth]);
})(0, 0);

console.log('타겟넘버 answer =', answer);
console.log('searchCount =', searchCount);