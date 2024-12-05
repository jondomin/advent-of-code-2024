export function solution(contents: string): number {
  const regex = /mul\((\d+),(\d+)\)/g;
  const matches = [...contents.matchAll(regex)];
  const result = matches.reduce((prev, curr) => {
    return prev + parseInt(curr[1]) * parseInt(curr[2]);
  }, 0);
  return result;
}

export function solution2(contents: string): number {
  const regex = /mul\((\d+),(\d+)\)|do\(\)|don\'t\(\)/g;
  const matches = [...contents.matchAll(regex)];
  let enabled = true;
  const result = matches.reduce((prev, curr) => {
    if (enabled && curr[0].startsWith("mul")) return prev + parseInt(curr[1]) * parseInt(curr[2]);
    if (curr[0] === "do()") enabled = true;
    else if (curr[0] === "don't()") enabled = false;
    return prev;
  }, 0);
  return result;
}
