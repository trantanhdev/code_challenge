function solution(X, Y, D) {
  let distance = Y - X;
  let step = 0;

  if (0 >= distance) {
    return 0;
  }

  return Math.ceil(distance / D);
}

function test(A, Y, D) {
  console.log(`A: ${A}, Y: ${Y}, D:${D} => Result: ${solution(A, Y, D)}`);
}

test(10, 85, 30);

test(1, 5, 2);

test(1, 1000, 1000);
