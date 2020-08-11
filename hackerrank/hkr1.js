let board;

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

function solution(ar) {
  const l = ar.length;
  ar = quickSort(ar, 0, l - 1);
  let count = 0;

  if (1 === l) {
    return 1;
  }

  let x = l - 1;
  let end = false;
  while (x >= 0 && !end) {
    ++count;
    if (ar[x - 1] && ar[x] > ar[x - 1]) {
      end = true;
    }
    --x;
  }
  return count;
}

function test(ar) {
  const nStr = `[${ar.join(",")}] ===> ${solution(ar)}`;
  const pElement = document.createElement("p");
  pElement.append(nStr);
  board.appendChild(pElement);
}

function main() {
  board = document.getElementById("board");
  test([4, 4, 3, 1]);
  test([1000, 999, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]);
}
