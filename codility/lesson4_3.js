function test(N, A) {
  console.log(`N: ${N}, A: ${A.join(",")} => Result: ${solution(N, A)}`);
}

function solution(N, A) {
  let l = A.length;
  let counter = [];
  let max = 0;
  let isPrevMax = false;
  for (let i = 0; i < N; i++) {
    counter[i] = 0;
  }

  for (let x = 0; x < l; x++) {
    let val = A[x];
    let position = val - 1;

    if (N < val) {
      if (!isPrevMax) {
        for (let y = 0; y < N; y++) {
          counter[y] = max;
        }
      }
      isPrevMax = true;
      continue;
    }

    if (counter[position]) {
      counter[position] += 1;
    } else {
      counter[position] = 1;
    }

    if (max < counter[position]) {
      max = counter[position];
      isPrevMax = false;
    }
  }

  return counter;
}

test(5, [3, 4, 4, 6, 1, 4, 4]);
