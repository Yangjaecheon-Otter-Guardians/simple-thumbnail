module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
  ignorePatterns: [".eslintrc.js", "tailwind.config.js"],
};
