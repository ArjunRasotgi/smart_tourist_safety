const { defineConfig } = require("eslint/config");
const expoConfig = require("@expo/eslint-config/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
  },
]);