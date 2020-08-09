function test(X, A) {
  console.log(`X: ${X},A: ${A.join(",")} => Result: ${solution(X, A)}`);
}

function solution(X, A) {
  let l = A.length;

  if (1 === X) {
    return 0;
  }

  if (X > l) {
    return -1;
  }

  let currSum = 0;
  let sum = (X * (X + 1)) / 2;
  let fLeafs = [];

  for (let y = 0; y < l; y++) {
    let val = A[y];

    if (fLeafs[val]) continue;

    fLeafs[val] = val;
    currSum += val;

    if (sum === currSum) {
      return y;
    }
  }

  return -1;
}

test(5, [1, 3, 1, 4, 2, 3, 5, 4]);
