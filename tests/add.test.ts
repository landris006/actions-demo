import { describe, test, expect } from "vitest";
import { add } from "../src/add";

describe("testing add", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });
});
