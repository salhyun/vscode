function checkAnagram(word1, word2) {
  let anagram = (a, b) => {
    let map = new Map();
    for(let i=0; i<a.length; i++) {
      map.set(a.charAt(i), i);
    }
    for(let i=0; i<b.length; i++) {
      if(map.has(b.charAt(i)) === false) {
        return false;
      }
    }
    return true;
  }
  if(word1.length <= word2.length) {
    return anagram(word1, word2);
  } else {
    return anagram(word2, word1);
  }
}

let whatAnagram = checkAnagram('abcdefg', 'abcdgfe');
console.log('whatAnagram =', whatAnagram);