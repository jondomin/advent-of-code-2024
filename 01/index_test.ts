import { assertEquals, assertGreater } from "@std/assert";
import solution from "./index.ts";

Deno.test("Day 1 - Test", async (t) => {
  const a = [3, 4, 2, 1, 3, 3];
  const b = [4, 3, 5, 3, 9, 3];
  const result = solution(a, b);
  assertEquals(2, result[0]);
  assertEquals(1, result[1]);
  assertEquals(0, result[2]);
  assertEquals(1, result[3]);
  assertEquals(2, result[4]);
  assertEquals(5, result[5]);
});
Deno.test("Day 1 - Part 1", async (t) => {
  const content = await Deno.readTextFile("01/input.txt");
  const a: number[] = [];
  const b: number[] = [];
  content.split("\n").forEach((line) => {
    const v = line.trim().split(/\s+/).map(Number);
    a.push(v[0]);
    b.push(v[1]);
  });
  const result = solution(a, b);
  const calc = result.reduce((prev, current) => prev + current, 0);
  // add all the results together

  assertGreater(calc, 0);
  console.log(calc);
});

Deno.test("Day 1 - Part 2", async (t) => {
  const content = await Deno.readTextFile("01/input.txt");
  const a: number[] = [];
  const b: number[] = [];
  content.split("\n").forEach((line) => {
    const v = line.trim().split(/\s+/).map(Number);
    a.push(v[0]);
    b.push(v[1]);
  });
  const result = solution(a, b);
  const calc = result.reduce((prev, current) => prev + current, 0);
  // add all the results together

  assertGreater(calc, 0);
  console.log(calc);
});
