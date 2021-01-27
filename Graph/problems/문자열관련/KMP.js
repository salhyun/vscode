function getPartialMatch(search) {
  let begin=1, matched=0;
  let pi = new Array(search.length).fill(0);

  while(begin+matched < search.length) {
    let pos = begin+matched;
    if(search.charAt(begin+matched) === search.charAt(matched)) {
      console.log(`match begin=${begin} pos=${search.charAt(pos)}, matched=${matched} pos=${search.charAt(matched)}`);
      matched++;
      pi[begin+matched-1] = matched;
    } else {
      if(matched == 0) {
        begin++;
      } else {
        console.log(`begin=${begin} jump = ${matched-pi[matched-1]}`);
        begin += matched-pi[matched-1];
        console.log(`jump begin=${begin}`);
        matched = pi[matched-1];
        console.log(`matched=${matched}`);
      }
    }
  }
  return pi;
}

let pi = getPartialMatch('aabaabac');
//let pi = getPartialMatch('abcdefba');
console.log('pi =', pi);
console.log('goodbye');