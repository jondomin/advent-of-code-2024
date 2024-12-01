import { zip } from "@std/collections";
export default function solution(a: number[], b: number[]) {
  const sortedA = a.sort();
  const sortedB = b.sort();

  const result = zip(sortedA, sortedB).map((pair) => {
    return Math.abs(pair[0] - pair[1]);
  });

  return result;
}
export function readFile() {}
