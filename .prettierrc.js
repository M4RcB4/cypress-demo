module.exports = {
  // Line width
  printWidth: 100,

  // Indentation
  tabWidth: 2,
  useTabs: false,

  // Semicolons and quotes
  semi: true,
  singleQuote: true,

  // Objects and arrays
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,

  // Arrow functions
  arrowParens: 'avoid',

  // Line endings (cross-platform)
  endOfLine: 'lf',

  // Override for specific file types
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
      },
    },
    {
      files: '*.json',
      options: {
        singleQuote: false,
      },
    },
  ],
};
