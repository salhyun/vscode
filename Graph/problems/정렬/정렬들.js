let step = 0;
//let data = [9, 8, 1, 3, 2];
let data = [24,5,20,28,33,1,44,43,17,47,21,36,29,6,26,7,10,49,19,11,30,2,48,34,12,45,39,23,16,46,27,25,3,40,4,35,31,14,42,15,9,38,41,8,0,18,37,22,13,32];
//선택정렬
function SelectionSort(data) {
  for(let i=0; i<data.length; i++) {
    let minIndex = i;
    for(let n=i+1; n<data.length; n++) {
      if(data[minIndex] > data[n]) {
        minIndex = n;
      }
    }
    [data[i], data[minIndex]] = [data[minIndex], data[i]];
    console.log(`step[${++step}] data=${data}`);
  }
}
SelectionSort(data);
console.log('selectionSort =', data);
//삽입정렬
step = 0;
//data = [9, 8, 1, 3, 2];
data = [24,5,20,28,33,1,44,43,17,47,21,36,29,6,26,7,10,49,19,11,30,2,48,34,12,45,39,23,16,46,27,25,3,40,4,35,31,14,42,15,9,38,41,8,0,18,37,22,13,32];
function InsertSort(data) {
  for(let i=1; i<data.length; i++) {
    let key=i;
    while(key > 0) {
      let prev = key-1;
      if(data[key] < data[prev]) {
        [data[key], data[prev]] = [data[prev], data[key]];
        console.log(`step[${++step}] data=${data}`);
      }
      key--;
    }
  }
}
InsertSort(data);
console.log('InsertSort =', data);
//퀵정렬
step = 0;
//data = [9, 8, 1, 3, 2];
//data = [5, 1, 6, 3, 4, 2, 7];
//data = [38, 27, 43, 3, 9, 82, 10];
//data = [3, 9, 4, 7, 5, 0, 1, 6, 8, 2];
data = [];
for(let i=0; i<50; i++) {
  data.push(i);
}
for(let i=data.length-1; i> 0; i--) {
  let n = Math.floor(Math.random()*(i+1));
  [data[i], data[n]] = [data[n], data[i]];
}
console.log(`shuffle = ${data}`);
data = [24,5,20,28,33,1,44,43,17,47,21,36,29,6,26,7,10,49,19,11,30,2,48,34,12,45,39,23,16,46,27,25,3,40,4,35,31,14,42,15,9,38,41,8,0,18,37,22,13,32];

function QuickSort(data, start, end) {
  function swap(a, b) {
    [data[a], data[b]] = [data[b], data[a]];
    console.log(`step[${++step}] data=${data}`);
  }
  let diff = end-start+1;//인덱스이기 때문에 +1 해서 갯수로 해줘야 함
  if(diff <= 2) {
    if(data[start] > data[end]) {
      swap(start, end);
    }
  } else {
    let left=start, right=end;
    let pivot = data[parseInt(start+diff/2)];

    while(left <= right) {
      while(data[left] < pivot) {
        left++;
      }
      while(data[right] > pivot) {
        right--;
      }
      if(left <= right) {
        swap(left, right);
        left++;
        right--;
      }
    }
    QuickSort(data, start, right);
    QuickSort(data, left, end);
  }
}
console.log(`step[${++step}] data=${data}`);
QuickSort(data, 0, data.length-1);
console.log(`QuickSort =${data}`);