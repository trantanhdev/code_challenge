function solution(A) {
  let obj = {};
  let l = A.length;

  for (let x = 0; x < l; x++) {
    let value = A[x];
    if (obj.hasOwnProperty(value)) {
      delete obj[value];
    } else {
      obj[value] = value;
    }
  }

  return obj[Object.keys(obj)[0]];
}

function test(A) {
  console.log(`A: ${A.join(",")} => Result: ${solution(A)}`);
}

let A1 = [9, 3, 9, 3, 9, 7, 9];
test(A1);
