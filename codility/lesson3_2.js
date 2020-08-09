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

  if (0 === l) {
    return 1;
  }

  let sArr = quickSort(A, 0, l - 1);
  for (let x = 1; x <= l; x++) {
    if (x != A[x - 1]) {
      return x;
    }
  }

  return l + 1;
}

function test(A) {
  console.log(`A: ${A.join(",")} => Result: ${solution(A)}`);
}

test([]);
test([1]);
test([2]);
test([2, 1]);
test([1, 3, 2, 5]);

test([1, 3, 2, 6, 4]);

test([1, 3, 2, 5, 4]);
