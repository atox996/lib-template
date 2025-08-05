import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('typescript-eslint').ConfigArray} */
const config = tseslint.config(
  { ignores: ["**/dist/**"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  prettierConfig,
  {
    name: "main",
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_", // 允许以 _ 开头的变量
          argsIgnorePattern: "^_", // 允许以 _ 开头的函数参数
          caughtErrorsIgnorePattern: "^_", // 允许以 _ 开头的 try-catch 错误
          destructuredArrayIgnorePattern: "^_", // 允许数组解构的 _ 变量
          ignoreRestSiblings: true, // 允许忽略解构时的剩余属性
        },
      ],
    },
  },
);

export default config;
