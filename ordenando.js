const swap = (arr, pos1, pos2) => {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
};

const shuffle = (arr, numSwaps) => {
  const length = arr.length;
  for (let i = 0; i < numSwaps; i++) {
    const pos1 = Math.floor(Math.random() * length);
    const pos2 = Math.floor(Math.random() * length);
    swap(arr, pos1, pos2);
  }
};

const bubble_sort = (arr) => {
  const length = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
};

const selection_sort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
};

const quick_sort = (arr, start, end) => {
  if (start < end) {
    const pivotIndex = partition(arr, start, end);
    quick_sort(arr, start, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, end);
  }
};

const partition = (arr, start, end) => {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
};