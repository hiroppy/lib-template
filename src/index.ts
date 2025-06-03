import { readFile } from "node:fs/promises";

export async function read() {
  return readFile(import.meta.filename, "utf-8");
}
