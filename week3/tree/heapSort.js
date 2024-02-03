function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor((n/2) - 1); i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }

  return arr;
}
function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }
  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    heapify(arr, n, largest);
  }
}

const arr = [1, 4, 6, 3,  2, 8, 9, ];
console.log(heapSort(arr));
