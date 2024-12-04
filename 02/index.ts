export function solution(list: number[][]) {
  return list.reduce((acc, arr) => {
    // if the array has only one element, it is a valid path
    if (arr.length < 2) return acc + 1;
    // if the array has only two elements, check if the distance is valid
    if (arr.length < 3) isValidDist(arr[0], arr[1]) ? acc + 1 : acc;
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
        !isValidDiff(leftDiff) ||
        !isValidDiff(rightDiff)
      )
        return acc;
    }
    return acc + 1;
  }, 0);
}
export function solution2(list: number[][]) {
  return list.reduce((acc, arr) => {
    // if the array has only one element, it is a valid path
    if (arr.length < 2) return acc + 1;
    // if the array has only two elements, check if the distance is valid
    if (arr.length < 3) isValidDist(arr[0], arr[1]) ? acc + 1 : acc;
    // check if array has a valid path
    let errorCount = 0;
    let i = 1;
    while (i < arr.length - 1) {
      const curr = arr[i];
      const prev = arr[i - 1];
      const next = arr[i + 1];
      const leftDiff = prev - curr;
      const rightDiff = curr - next;
      if (isInvalidIncDec(leftDiff, rightDiff) || !isValidDiff(leftDiff) || !isValidDiff(rightDiff)) {
        if (errorCount > 0) return acc;
        errorCount++;
        if (!isValidDiff(rightDiff) && i < arr.length - 2 && isValidDist(curr, arr[i + 2])) {
          arr.splice(i + 1, 1);
        } else if (!isValidDiff(leftDiff)) {
          arr.splice(i - 1, 1);
        } else {
          arr.splice(i, 1);
        }
        continue;
      }
      i++;
    }
    return acc + 1;
  }, 0);
}
function isInvalidIncDec(leftDiff: number, rightDiff: number) {
  return (leftDiff > 0 && rightDiff < 0) || (leftDiff < 0 && rightDiff > 0);
}
function isValidDist(a: number, b: number) {
  const diff = Math.abs(a - b);
  return diff >= 1 && diff <= 3;
}
function isValidDiff(a: number) {
  const diff = Math.abs(a);
  return diff >= 1 && diff <= 3;
}
