import { assertEquals } from "@std/assert";
import { readFile } from "./utils.ts";

Deno.test("Day 2 - Utils", async () => {
  const expect = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const result = await readFile("02/utils.txt");
  assertEquals(expect, result);
});
