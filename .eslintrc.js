module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-pascal-case': [2, { allowAllCaps: true, ignore: [] }],
    'react/prop-types': 'off', // Disable prop-types rule if you're not using it
    'react/react-in-jsx-scope': 'off', // Disable this for React 17+
    'no-console': 'warn', // Warn on console.log statements
    'no-nested-ternary': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: ['error', 'single'], // Enforce single quotes
    semi: ['error', 'always'], // Enforce semicolons
    indent: ['error', 2], // Enforce 2-space indentation
  },
  settings: {
    react: {
      version: 'detect', // Detect the installed React version
    },
  },
};
