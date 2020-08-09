let board = document.getElementById("board");
let hEle = document.createElement("h1");
hEle.append("Lesson 4: MissingInteger");
board.appendChild(hEle);

function test(A) {
  let str = `A: ${A.join(",")}  =>  Result: ${solution(A)}`;
  let pEle = document.createElement("p");
  pEle.append(str);
  board.appendChild(pEle);
}

function solution(A) {
  let counter = [];
  let l = A.length;

  for (let x = 0; x < l; x++) {
    let val = A[x];
    if (0 < val) {
      let pos = val - 1;
      if (counter[pos]) {
        counter[pos] += 1;
      } else {
        counter[pos] = 1;
      }
    }
  }

  let cl = counter.length;

  if (0 === cl) {
    return 1;
  }

  for (let x = 0; x < cl; x++) {
    let cVal = counter[x];
    if (!cVal) {
      return x + 1;
    }
  }

  return cl + 1;
}

test([1, 2, 3]);
test([-1, -3]);
