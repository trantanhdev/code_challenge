let board;

function solution(s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;

  // check when length = 1
  if (1 === l1 && -1 != s2.indexOf(s1.charAt(0))) {
    return 1;
  }

  if (1 === l2 && -1 != s1.indexOf(s2.charAt(0))) {
    return 1;
  }

  // check contain
  if (-1 != s2.indexOf(s1)) {
    return l1;
  }
  if (-1 != s1.indexOf(s2)) {
    return l2;
  }

  let output = 0;
  let counter = [];
  for (let i2 = 0; i2 <= l2; ++i2) {
    for (let i1 = 0; i1 <= l1; ++i1) {
      if (!counter[i2]) {
        counter[i2] = [];
      }

      if (0 === i2 || 0 === i1) {
        counter[i2][i1] = 0;
      } else {
        let score = 0;
        let char2 = s2.charAt(i2 - 1);
        let char1 = s1.charAt(i1 - 1);
        if (char2 === char1) {
          score = 1 + counter[i2 - 1][i1 - 1];
        } else {
          score += Math.max(counter[i2 - 1][i1], counter[i2][i1 - 1]);
        }

        counter[i2][i1] = score;
        if (output < score) {
          output = score;
        }
      }
    }
  }

  return output;
}

function test(s1, s2) {
  const nStr = `"${s1}", "${s2}" ===> ${solution(s1, s2)}`;
  const pElement = document.createElement("p");
  pElement.append(nStr);
  board.appendChild(pElement);
}

function main() {
  board = document.getElementById("board");
  test("H", "ALHLY");
  test("AAAHAAA", "A");
  test("HARRYabc", "HARRY");
  test("HARRY", "SALLY");
  test("AA", "BB");
  test("SHINCHAN", "NOHARAAA");
  test("ABCDEF", "FBDAMN");
  test(
    "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS",
    "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"
  );
}
