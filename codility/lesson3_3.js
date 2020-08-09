function solution(A) {
  let sum = 0;
  let l = A.length;

  A.forEach((element) => {
    sum += element;
  });

  let s1 = 0;
  let s2 = sum;
  let minDistance = Infinity;

  for (let p = 1; p < l; p++) {
    let val = A[p - 1];
    s1 += val;
    s2 -= val;
    let currDistance = Math.abs(s2 - s1);
    if (currDistance < minDistance) {
      minDistance = currDistance;
    }
  }

  return minDistance;
}

function test(A) {
  console.log(`A: ${A.join(",")} => Result: ${solution(A)}`);
}

test([3, 1, 2, 4, 3]);
test([-1000, 1000]);
