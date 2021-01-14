let data = [9, 8, 1, 3, 2];
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
  }
}
SelectionSort(data);
console.log('selectionSort =', data);
//삽입정렬
data = [9, 8, 1, 3, 2];
function InsertSort(data) {
  for(let i=1; i<data.length; i++) {
    let key=i;
    while(key > 0) {
      let prev = key-1;
      if(data[key] < data[prev]) {
        [data[key], data[prev]] = [data[prev], data[key]];
      }
      key--;
    }
  }
}
InsertSort(data);
console.log('InsertSort =', data);
//퀵정렬
//data = [9, 8, 1, 3, 2];
data = [5, 1, 6, 3, 4, 2, 7];
function QuickSort(data, start, end) {
  let diff = end-start;
  if(diff < 2) {
    if(data[start] > data[end]) {
      [data[start], data[end]] = [data[end], data[start]];
    }
  } else {
    let left=start, right=end;
    let pivot = parseInt(start+(diff/2+0.5));

    function swap() {
      [data[left], data[right]] = [data[right], data[left]];
    }
    while(left < right) {
      if(data[left] > data[pivot] && data[pivot] > data[right]) {
        swap();
        left++;
        right--;
      }
      if(data[left] < data[pivot]) {
        left++;
        if(left >= pivot) {
          swap();
          [left, right] = [right, left];
          pivot = left-1;
        }
      }
      if(data[right] > data[pivot]) {
        right--;
        if(right <= pivot) {
          swap();
          [left, right] = [right, left];
          pivot = right;
        }
      }
    }
    QuickSort(data, start, pivot);
    QuickSort(data, pivot+1, end);
  }
}
QuickSort(data, 0, data.length-1);
console.log('QuickSort =', data);