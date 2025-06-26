module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'cypress', 'prettier'],
  rules: {
    // Prettier formatting
    'prettier/prettier': 'error',

    // Cypress-specific rules
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'warn',

    // TypeScript rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-const': 'error',

    // General JavaScript/TypeScript rules
    'no-console': 'off', // Allow console.log in tests
    'no-debugger': 'warn', // Warn about debugger statements
    'prefer-const': 'error',
    'no-var': 'error',

    // Import/export rules
    'no-duplicate-imports': 'error',

    // Code style
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'brace-style': ['error', '1tbs'],
  },
  overrides: [
    {
      files: ['cypress/**/*.{js,ts}'],
      rules: {
        // More lenient rules for test files
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-expressions': 'off', // Cypress commands look like unused expressions
      },
    },
  ],
};
