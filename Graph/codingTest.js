let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["mislav", "ana", "mislav"]

let answer = 0;
let numbers = [1, 1, 1, 1, 1];
let target = 3;
for(let i=0; i<numbers.length; i++) {
  for(let n=i; n<numbers.length; n++) {
    let sum=0;
    numbers.forEach((number, index) => {
      if(index >= i && index <= n) {
        sum -= number;
      } else {
        sum += number;
      }
    })
    if(sum === target) {
      answer += 1;
    }
  }
}
console.log('answer =', answer);

answer = '';
let map = new Map();
completion.forEach(element => {
  let count = map.get(element);
  if(count !== undefined) {
    map.set(element, count+1);
  } else {
    map.set(element, 1);
  }
});
participant.forEach(element => {
  let count = map.get(element);
  if(count !== undefined && count > 0) {
    map.set(element, count-1);
  } else {
    answer = element;
  }
});

console.log('answer =', answer);

answer = [];
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

commands.forEach(command => {
  let sorted = array.slice(command[0]-1, command[1]).sort();
  answer.push(sorted[command[2]-1]);
})
console.log('answer =', answer);

let paper = [];
let answers = [1,2,3,4,5];
for(let i=0; i<answers.length; i++) {
  paper.push(i%6+1);
};
console.log('paper =', paper);
let c=0;
paper = [];
let a = [2, 1, 2, 3, 2, 4, 2, 5];
for(let i=0; i<answers.length; i++) {
  paper.push(a[c++]);
  if(c >= a.length) c=0;
};
console.log('paper =', paper);
c=0;
paper = [];
a = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
for(let i=0; i<answers.length; i++) {
  paper.push(a[c++]);
  if(c >= a.length) {c=0}
}
console.log('paper =', paper);