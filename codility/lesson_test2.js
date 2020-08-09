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

  // first we sort the array
  A.sort();

  // loop to find the max number which are multiples of 4
  for (let x = l - 1; x > 0; x--) {
    let val = A[x];
    if (0 == val % 4) {
      return val;
    }
  }
}

test([-6, -91, 1011, -100, 84, -22, 0, 1, 473]);
