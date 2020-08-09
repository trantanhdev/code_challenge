function solution(A, K) {
  let l = A.length;
  let realStep = K % l;

  let firstArr = A.slice(-1 * realStep);
  let endArr = A.slice(0, l - realStep);

  return firstArr.concat(endArr).slice(0, l);
}

function show(A, K) {
  console.log(`A: ${A.join(",")} - K: ${K} => A: ${solution(A, K)}`);
}

let A1 = [3, 8, 9, 7, 6];
let K1 = 3;
show(A1, K1);

let A2 = [0, 0, 0];
let K2 = 1;
show(A2, K2);

let A3 = [1, 2, 3, 4];
let K3 = 4;
show(A3, K3);
