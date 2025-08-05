import { defineConfig, type UserConfigFn } from "tsdown";

export default defineConfig((options) => {
  const { sourcemap = !!options.watch } = options;
  return {
    platform: "neutral",
    minify: true,
    sourcemap,
    ...options,
    entry: "src/index.ts",
  };
}) satisfies UserConfigFn as UserConfigFn;
