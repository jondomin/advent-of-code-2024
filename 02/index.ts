export function solution(list: number[][]) {
  return list.reduce((acc, arr) => {
    // if the array has only one element, it is a valid path
    if (arr.length < 2) return acc + 1;
    // if the array has only two elements, check if the distance is valid
    if (arr.length < 3) isValidDistance(arr[0], arr[1]) ? acc + 1 : acc;
    // check if array has a valid path
    for (let i = 1; i < arr.length - 1; i++) {
      const curr = arr[i];
      const prev = arr[i - 1];
      const next = arr[i + 1];
      const leftDiff = prev - curr;
      const rightDiff = curr - next;
      if (
        (leftDiff > 0 && rightDiff < 0) ||
        (leftDiff < 0 && rightDiff > 0) ||
        !isValidDifference(leftDiff) ||
        !isValidDifference(rightDiff)
      )
        return acc;
    }
    return acc + 1;
  }, 0);
}
export function solution2(list: number[][]) {
  return list.reduce((acc, arr) => {
    let errorCount = 0;
    const orgArr = [...arr];
    while (true) {
      const isValid = arr.every((_, i, a) => isValidIncDec(i, a) && isValidDistance(i, a));
      if (isValid) return acc + 1;
      arr = orgArr.filter((_, i) => i !== errorCount);
      errorCount++;
      if (errorCount > orgArr.length) return acc;
    }
  }, 0);
}
function isValidIncDec(i: number, arr: number[]) {
  if (i === 0 || i === arr.length - 1) return true;
  const leftDiff = arr[i - 1] - arr[i];
  const rightDiff = arr[i] - arr[i + 1];
  return (leftDiff > 0 && rightDiff > 0) || (leftDiff < 0 && rightDiff < 0);
}
function isValidDistance(i: number, arr: number[]) {
  if (i === 0 || i === arr.length - 1) return true;
  const leftDiff = arr[i - 1] - arr[i];
  const rightDiff = arr[i] - arr[i + 1];
  return Math.abs(leftDiff) >= 1 && Math.abs(leftDiff) <= 3 && Math.abs(rightDiff) >= 1 && Math.abs(rightDiff) <= 3;
}
function isValidDifference(a: number) {
  const diff = Math.abs(a);
  return diff >= 1 && diff <= 3;
}
