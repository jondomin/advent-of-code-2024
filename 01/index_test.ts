import { assertEquals } from "@std/assert";
import solution from "./index.ts";

Deno.test("Day 1", async (t) => {
	await t.step("solution", () => {
		const result = solution();
		assertEquals(result, "hello world");
	});
})
