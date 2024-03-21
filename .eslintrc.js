module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-extra-semi": "error",
  },
  globals: {},
  ignorePatterns: [],
};
