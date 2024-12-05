import { assertEquals } from "@std/assert/equals";
import { solution, solution2 } from "./index.ts";

Deno.test("Day 3 - Test 1", async () => {
  const content = await Deno.readTextFile("03/test.txt");
  const result = solution(content);
  assertEquals(result > 0, true);
});
Deno.test("Day 3.1 - Solution", async () => {
  const content = await Deno.readTextFile("03/input.txt");
  const result = solution(content);
  console.log(result);
  assertEquals(result > 0, true);
});

Deno.test("Day 3.2 - Test 1", async () => {
  const content = await Deno.readTextFile("03/test2.txt");
  const result = solution2(content);
  console.log(result);
  assertEquals(result > 0, true);
});

Deno.test("Day 3.2 - Solution", async () => {
  const content = await Deno.readTextFile("03/input.txt");
  const result = solution2(content);
  console.log(result);
  assertEquals(result > 0, true);
});
