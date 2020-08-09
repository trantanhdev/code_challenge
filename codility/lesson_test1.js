// let board = document.getElementById("board");
// let hEle = document.createElement("h1");
// hEle.append("Lesson 5: PassingCars");
// board.appendChild(hEle);

function test(A) {
  let str = `A: ${A.join(",")}  =>  Result: ${solution(A)}`;
  let pEle = document.createElement("p");
  pEle.append(str);
  board.appendChild(pEle);
}

function solution(A) {
  let l = A.length;
  let minR = Infinity; // min Reverse

  let curR = 0; // current Reverse

  // target array start with 1
  for (let x = 0; x < l; x++) {
    let val = A[x];
    if (x % 2 == 0 && 1 != val) {
      curR += 1;
    }

    if (x % 2 != 0 && 0 != val) {
      curR += 1;
    }
  }

  minR = curR;
  curR = 0;

  // target array start with 0
  for (let x = 0; x < l; x++) {
    let val = A[x];
    if (x % 2 == 0 && 0 != val) {
      curR += 1;
    }

    if (x % 2 != 0 && 1 != val) {
      curR += 1;
    }
  }

  if (minR > curR) {
    minR = curR;
  }

  return minR;
}

test([1, 0, 1, 0, 1, 1]);
test([1, 1, 0, 1, 1]);
test([0, 1, 0]);
test([0, 1, 1, 0]);
