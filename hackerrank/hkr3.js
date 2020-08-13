let board;

function solution(grades) {
  let output = [];
  for (let grade of grades) {
    if (38 > grade) {
      output.push(grade);
      continue;
    }

    let attemptGrade = Math.round(grade / 5) * 5;
    attemptGrade > grade ? output.push(attemptGrade) : output.push(grade);
  }

  return output;
}

function test(ar) {
  const nStr = `[${ar.join(", ")}] ===> [${solution(ar).join(", ")}]`;
  const pElement = document.createElement("p");
  pElement.append(nStr);
  board.appendChild(pElement);
}

function main() {
  board = document.getElementById("board");
  test([23, 38, 40, 53, 66]);
}
