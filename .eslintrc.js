module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  rules: {
    "vue/no-multiple-template-root": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    amd: true,
  },
};
