import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
    include: ["src/**/*.test.ts"],
    globalSetup: "vitest.setup.ts",
    coverage: {
      enabled: true,
      include: ["src/**/*.ts"],
    },
  },
});
