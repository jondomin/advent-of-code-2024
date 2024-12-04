import { assertEquals } from "@std/assert/equals";
import { solution } from "./index.ts";
import { readFile } from "./utils.ts";

Deno.test("Day 2 - Test 1", async () => {
  // Arrange
  const data = await readFile("02/test.txt");
  // Act
  const result = solution(data);
  // Assert
  assertEquals(result, 2);
});
Deno.test("Day 2 - Solution 1", async () => {
  // Arrange
  const data = await readFile("02/input.txt");
  // Act
  const result = solution(data);
  // Assert
  console.log(result);
  assertEquals(result > 0, true);
});
