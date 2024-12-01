import { assertEquals, assertGreater } from "@std/assert";
import solution, { readFile, solution2 } from "./index.ts";

Deno.test("Day 1 - Test", async () => {
  const [a, b] = await readFile("01/test.txt");
  const result = solution(a, b);
  assertEquals(2, result[0]);
  assertEquals(1, result[1]);
  assertEquals(0, result[2]);
  assertEquals(1, result[3]);
  assertEquals(2, result[4]);
  assertEquals(5, result[5]);
});
Deno.test("Day 1 - Part 1", async () => {
  const [a, b] = await readFile("01/input.txt");
  const result = solution(a, b);
  const calc = result.reduce((prev, current) => prev + current, 0);

  assertGreater(calc, 0);
  console.log(calc);
});

Deno.test("Day 1 - Test 2", async () => {
  const [a, b] = await readFile("01/test.txt");
  const calc = solution2(a, b);
  assertGreater(calc, 0);
  console.log(calc);
});

Deno.test("Day 1 - Part 2", async () => {
  const [a, b] = await readFile("01/input.txt");
  const calc = solution2(a, b);
  assertGreater(calc, 0);
  console.log(calc);
});
