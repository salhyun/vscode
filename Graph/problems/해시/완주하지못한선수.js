let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["mislav", "ana", "mislav"]

let answer = '';
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