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
function isValidDist(a: number, b: number) {
  const diff = Math.abs(a - b);
  return diff >= 1 && diff <= 3;
}
function isValidDiff(a: number) {
  const diff = Math.abs(a);
  return diff >= 1 && diff <= 3;
}
