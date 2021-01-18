let tiles=[1, 2];

let count=0;
function tiling(width) {
  if(width < 0) {
    return;
  } else if(width == 0) {
    count++;
  } else {
    for(let i=0; i<tiles.length; i++) {
      tiling(width-tiles[i]);
    }
  }
}
tiling(4);
console.log('count =', count);
