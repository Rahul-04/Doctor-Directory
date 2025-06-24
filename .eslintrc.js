module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true, // ✅ Add this
    jest: true, // ✅ Add this if you're using Jest for tests
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Customize rules here
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
