// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: "./tsconfig.json", // optional: enable type-aware rules (slow)
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jsx-a11y",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // optional
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended" // enables eslint-plugin-prettier and displays prettier errors
  ],
  settings: {
    react: { version: "detect" }
  },
  rules: {
    // your rule overrides:
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // not needed with modern React
    // example: prefer arrow functions for components (optional)
    "@typescript-eslint/explicit-function-return-type": "off"
  }
};
