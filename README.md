# cypress-demo

Minimal Cypress example for testing Google Translate.

## Setup

Use Node.js 20.14.0.

```bash
nvm install
nvm use
npm install
```

## Running tests

```bash
npm run cy:open   # interactive mode
npm run cy:run    # headless mode
```

Selectors are organised in `cypress/support/pageObjects/translatePage.ts`.

The GitHub Actions workflow runs linting and the tests on each pull request and
performs a sample fuzzy analysis of screenshots using `scripts/fuzzyCheck.js`.
