let board;

function solution(s, t, a, b, apples, oranges) {
  let cApple = 0;
  let cOrange = 0;

  for (let apple of apples) {
    let p = apple + a;
    if (s <= p && t >= p) {
      cApple += 1;
    }
  }

  for (let orange of oranges) {
    let p = orange + b;
    if (s <= p && t >= p) {
      cOrange += 1;
    }
  }

  console.log(cApple);
  console.log(cOrange);
}

function test(s, t, a, b, apples, oranges) {
  const nStr = `s = ${s}, t=${t}, a=${a}, b=${b}, apples=[${apples.join(
    ", "
  )}], oranges=[${oranges.join(", ")}] ===> ${solution(
    s,
    t,
    a,
    b,
    apples,
    oranges
  )}`;
  const pElement = document.createElement("p");
  pElement.append(nStr);
  board.appendChild(pElement);
}

function main() {
  board = document.getElementById("board");
  test(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
}
