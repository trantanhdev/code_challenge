function test(A) {
  console.log(`A: ${A.join(",")} => Result: ${solution(A)}`);
}

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

function solution(A) {
  let l = A.length;
  let sArr = quickSort(A, 0, l - 1);

  for (let x = 1; x <= l; x++) {
    let val = A[x - 1];
    if (x != val) {
      return 0;
    }
  }

  return 1;
}

test([1, 2, 3, 4, 5]);
test([4, 1, 3]);
test([1, 4, 1]);
