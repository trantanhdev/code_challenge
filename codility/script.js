function solution(N) {
  let max = 0;
  let count = 0;
  let prevBi = 0;
  let isGap = false;

  if (N <= 4) {
    return 0;
  }

  while (N > 0) {
    let bi = N % 2;
    N = N - (Math.floor(N / 2) + bi);
    if (0 === bi) {
      if (1 === prevBi || isGap) {
        isGap = true;
        count += 1;
      }
    } else {
      if (isGap) {
        if (max < count) {
          max = count;
        }
        isGap = false;
        count = 0;
      }
    }
    prevBi = bi;
  }

  return max;
}
