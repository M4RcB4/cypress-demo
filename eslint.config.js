const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const cypress = require('eslint-plugin-cypress');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  // Base JavaScript recommended rules
  js.configs.recommended,

  // Prettier config (disables conflicting rules)
  prettierConfig,

  // Configuration files (Node.js environment)
  {
    files: ['*.config.js', '.eslintrc.js', '.prettierrc.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
    },
  },

  // Global configuration for all files
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-debugger': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
      'no-debugger': 'warn',
    },
  },

  // Cypress test files configuration
  {
    files: ['cypress/**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        before: 'readonly',
        afterEach: 'readonly',
        after: 'readonly',
        context: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      cypress,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/no-async-tests': 'error',
      'cypress/no-pause': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-expressions': 'off',
    },
  },

  // Files to ignore
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'cypress/screenshots/**',
      'cypress/videos/**',
      'cypress/downloads/**',
      'scratch/**',
      '*.log',
    ],
  },
];
