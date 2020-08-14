let board;

function solution(n, s) {
  s = s + " ";
  let pointers = [];
  let charCode = s.charCodeAt(0);
  let counter = 1;

  for (let x = 1; x <= n; ++x) {
    let curChatCode = s.charCodeAt(x);
    if (charCode === curChatCode) {
      ++counter;
    } else {
      pointers.push([charCode, counter]);
      counter = 1;
      charCode = curChatCode;
    }
  }

  let sum = 0;
  let l = pointers.length;
  if (3 <= l) {
    let prevPointer;
    let curPointer = pointers[0];
    let nextPointer = pointers[1];
    sum += (curPointer[1] * (curPointer[1] + 1)) / 2;
    for (let y = 1; y < l - 1; ++y) {
      prevPointer = curPointer;
      curPointer = nextPointer;
      nextPointer = pointers[y + 1];
      sum += (curPointer[1] * (curPointer[1] + 1)) / 2;
      if (prevPointer[0] === nextPointer[0] && curPointer[1] == 1) {
        sum +=
          prevPointer[1] > nextPointer[1] ? nextPointer[1] : prevPointer[1];
      }
    }
    sum += (nextPointer[1] * (nextPointer[1] + 1)) / 2;
  } else {
    for (let y = 0; y < l; ++y) {
      let pointer = pointers[y];
      sum += (pointer[1] * (pointer[1] + 1)) / 2;
    }
  }

  return sum;
}

function test(n, s) {
  const nStr = `"${s}" ===> ${solution(n, s)}`;
  const pElement = document.createElement("p");
  pElement.append(nStr);
  board.appendChild(pElement);
}

function main() {
  board = document.getElementById("board");
  test(5, "asasd");
}
