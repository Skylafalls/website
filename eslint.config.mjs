// @ts-check
import { withNuxt } from "./.nuxt/eslint.config.mjs";
import stylistic from "@stylistic/eslint-plugin";
import oxlint from "eslint-plugin-oxlint";

export default withNuxt(
  // Your custom configs here
  stylistic.configs.customize({
    braceStyle: "1tbs",
    quotes: "double",
    semi: true,
    severity: "warn",
  }),
  oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
);
