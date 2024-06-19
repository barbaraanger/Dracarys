import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
    )
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    languageOptions: {
        globals: {
          AudioWorkletGlobalScope: 'readonly',
        },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      indent: ["warn", 4],
      "linebreak-style": ["warn", "unix"],
      quotes: ["warn", "single"],
      semi: ["warn", "always"],
    },
  },
];
