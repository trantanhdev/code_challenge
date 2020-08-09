let board = document.getElementById("board");
let hEle = document.createElement("h1");
hEle.append("Lesson 5: PassingCars");
board.appendChild(hEle);

function test(A) {
  let str = `A: ${A.join(",")}  =>  Result: ${solution(A)}`;
  let pEle = document.createElement("p");
  pEle.append(str);
  board.appendChild(pEle);
}

function solution(A) {
  let l = A.length;
  let pNumber = 0;
  let lNumber = 0;
  const maxPair = 1000000000;

  for (let x = 0; x < l; x++) {
    let val = A[x];
    if (0 === val) {
      lNumber += 1;
    } else {
      pNumber += lNumber;
    }

    if (maxPair < pNumber) {
      return -1;
    }
  }

  return pNumber;
}

test([0, 1, 0, 1, 1]);
