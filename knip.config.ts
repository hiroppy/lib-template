import type { KnipConfig } from "knip";

const config: KnipConfig = {
  ignore: [],
  vitest: {
    entry: ["src/**/*.test.ts"],
  },
  ignoreDependencies: [],
  ignoreBinaries: [],
};

export default config;
