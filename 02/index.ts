export async function solution(list: number[][]) {
  return list.reduce((prev, current) => {
    let diff: number = 0;
    if (current.length < 1) return prev + 1;
    for (let i = 0; i < current.length - 1; i++) {
      const next = current[i + 1];
      if (current[i] - next) return prev;
    }
    return prev + 1;
  }, 0);
}
