import { zip } from "@std/collections";
export default function solution(a: number[], b: number[]) {
  const sortedA = a.sort();
  const sortedB = b.sort();

  const result = zip(sortedA, sortedB).map((pair) => {
    return Math.abs(pair[0] - pair[1]);
  });

  return result;
}

export function solution2(a: number[], b: number[]): number {
  const occ = occurrences(b);
  return a.reduce((prev, current) => {
    if (occ[current]) {
      return prev + current * occ[current];
    }
    return prev;
  }, 0);
}

function occurrences(b: number[]) {
  const hash: Record<string, number> = {};
  b.forEach((num) => {
    hash[num] = (hash[num] || 0) + 1;
  });
  return hash;
}

export async function readFile(
  filePath: string
): Promise<[number[], number[]]> {
  const content = await Deno.readTextFile(filePath);
  const a: number[] = [];
  const b: number[] = [];
  content.split("\n").forEach((line) => {
    const v = line.trim().split(/\s+/).map(Number);
    a.push(v[0]);
    b.push(v[1]);
  });
  return [a, b];
}
