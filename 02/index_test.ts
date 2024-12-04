import { assertEquals } from "@std/assert/equals";
import { solution, solution2 } from "./index.ts";
import { readFile } from "./utils.ts";

Deno.test("Day 2 - Test 1", async () => {
  // Arrange
  const data = await readFile("02/test.txt");
  // Act
  const result = solution(data);
  // Assert
  assertEquals(result, 2);
});
Deno.test("Day 2 - Test 2", async () => {
  // Arrange
  const data = await readFile("02/test.txt");
  // Act
  const result = solution2(data);
  // Assert
  assertEquals(result, 4);
});
Deno.test("Day 2 - Test 3", async () => {
  // Arrange
  const data = await readFile("02/test2.txt");
  // Act
  const result = solution2(data);
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
Deno.test("Day 2 - Solution 2", async () => {
  // Arrange
  const data = await readFile("02/input.txt");
  // Act
  const result = solution2(data);
  // Assert
  console.log(result);
  assertEquals(result > 0, true);
});
