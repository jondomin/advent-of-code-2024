export async function readFile(filePath: string): Promise<number[][]> {
  const content = await Deno.readTextFile(filePath);
  const a: number[][] = [];
  content.split("\n").forEach((line) => {
    const v = line.trim().split(/\s+/).map(Number);
    a.push(v);
  });
  return a;
}
