(function fibonacci() {
  function fibo(n) {
    if(n >= 0 && n <= 1) {
      return n;
    }
    return fibo(n-1) + fibo(n-2);
  }
  let n = fibo(7);
  console.log('fobo =', n);
})();

(function convertURL() {
  let s = 'Mr John Smith';
  let result = '';
  let pos=0;
  let i=0;
  for(i=0; i<s.length; i++) {
    if(s.charAt(i) === ' ') {
      result += s.substr(pos, i-pos) + '%20';
      pos = i+1;
    }
  }
  if(pos < i) {
    result += s.substr(pos, i-pos);
  }
  console.log('result =', result);
})();

(function onefive() {
  let s1 = ['pale', 'pales', 'pale', 'pale'];
  let s2 = ['ple', 'pale', 'bale', 'bake'];

  s1 = s1.map(element => {
    return element.split('').sort().join('');
  });
  s2 = s2.map(element => {
    return element.split('').sort().join('');
  });
  let answer=0;
  for(let i=0; i<s1.length; i++) {
    if(s1[i].length === s2[i].length) {
      let diff=0;
      let map = new Map();
      for(let n=0; n<s1[i].length; n++) {
        map.set(s1[i].charAt(n), n);
      }
      for(let n=0; n<s2[i].length; n++) {
        if(map.get(s2[i].charAt(n)) === undefined) {
          diff++;
        }
      }
      if(diff <= 1) {
        console.log(`s1=${s1[i]}, s2=${s2[i]} is true`);
        answer++;
      } else {
        console.log(`s1=${s1[i]}, s2=${s2[i]} is false`);
      }

    } else {
      let what = s1[i].length < s2[i].length ? s2[i].substr(s1[i]) : s1[i].substr(s2[i]);
      if(what) {
        answer++;
        console.log(`s1=${s1[i]}, s2=${s2[i]} is true`);
      } else {
        console.log(`s1=${s1[i]}, s2=${s2[i]} is false`);
      }
    }
  }
  console.log('answer =', answer);

})();

(function Permutation() {//모든 순열
  let s = 'abc';
  let r = '';
  let b = 'cbabadcbbabbcbabaabccbabc';

  function removeChar(s, index) {
    let r = '';
    for(let n=0; n<s.length; n++) {
      if(index !== n) {
        r += s.charAt(n);
      }
    }
    return r;
  }
  let leafCount=0;
  let allPermutation = [];
  function permutation(sub, char, depth) {
    if(depth <= 0) {
      console.log(`leafCount=${leafCount++}, char=${char}`);
      allPermutation.push(char);
    } else {
      for(let i=0; i<depth; i++) {
        permutation(removeChar(sub, i), char+sub.charAt(i), depth-1);
      }
    }  
  }
  permutation(s, '', s.length);

  for(let i=0; i<allPermutation.length; i++) {
    for(let n=0; n<allPermutation.length; n++) {
      if(i !== n && allPermutation[i] === allPermutation[n]) {
        console.log('wtf!!');
      }
    }
  }
})();

let system=16;
let count=16;
let people=2;
let order=1;
let result=[];

if(system == 2 || system == 16) {
  let length = people*count;
  let data=[];
  for(let i=0; i<length; i++) {
    let a = i.toString(system);
    for(let n=0; n<a.length; n++) {
      data.push(a[n]);
    }
  }
  for(let i=0; i<data.length; i++) {
    if(i%people === (order-1)) {
      result.push(data[i]);
    }
  }
}
console.log(`result=${result}`);

(function compressKAKAO() {
  let message = 'KAKAO';
  let start = 'A'.charCodeAt(0);
  let end = 'Z'.charCodeAt(0);
  let indices = new Map();
  for(let i=start; i<end; i++) {
    indices.set( String.fromCharCode(i), i);
  }
  
  function checkIndex(s) {
    let result = false;
    if(indices.get(s)) {
      console.log(s + ' code = ' + (indices.get(s) - start));
      result = true;
    }
    return result;
  }
  function setIndex(s) {
    indices.set(s, start+indices.size);
  }
  let pos=0;
  let a = checkIndex(message.charAt(pos));
  a = message.charAt(pos) + message.charAt(++pos);
  setIndex(a);
  while(pos < message.length-1) {
    a = message.charAt(pos) + message.charAt(pos+1);
    if(checkIndex(a)) {
      a += message.charAt(pos+2);
      setIndex(a);
      pos += 2;
    } else {
      a = message.charAt(pos);
      checkIndex(a);
      a = message.charAt(pos) + message.charAt(++pos);
      setIndex(a);
    }
  }
  checkIndex(message.charAt(pos));
})();

(function whatIsThis() {
  let answer = [];
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
})();

import {LinkedList} from './LinkedList.js'

(function findLoopInLinkedlist() {//루프발견하기 링크드리스트
  let list = new LinkedList();
  list.appendNode('a');
  list.appendNode('b');
  list.appendNode('c');
  list.appendNode('d');
  list.appendNode('e');
  
  let eNode = list.findPreviousNode('e').next;
  eNode.next = list.findPreviousNode('d');

  let map = new Map();
  let index=0;
  let node = list.head;
  map.set(node.item,index++);
  node = node.next;
  while(node !== null) {
    let value = map.get(node.item);
    if(value === undefined) {
      map.set(node.item, index++);
      node = node.next;
    } else {
      console.log('find loop node item =', node.item);
      node = null;
      break;
    }
  }
<<<<<<< Updated upstream
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
a = [2, 1, 2, 3, 2, 4, 2, 5];
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
=======

  console.log(list);

})();
>>>>>>> Stashed changes
