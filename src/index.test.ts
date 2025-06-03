import { describe, expect, it } from "vitest";
import { read } from "./index";

describe("index", () => {
  it("should read self", async () => {
    expect(await read()).toMatchInlineSnapshot(`
      "import { readFile } from "node:fs/promises";

      export async function read() {
        return readFile(import.meta.filename, "utf-8");
      }
      "
    `);
  });
});
