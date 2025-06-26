# cypress-demo

Cypress automation testing Google Translate language detection

## Setup

```bash
npm install
```

# NPM scripts and what they do

```bash
# cypress open is the command to open the cypress UI
"cy:open": "cypress open",
# cypress run is the command to run the cypress tests
"cy:run": "cypress run",
# typecheck is the command to check the typescript code
"typecheck": "tsc --noEmit",
# lint is the command to lint the code
"lint": "eslint . --ext .js,.ts,.tsx",
# lint:fix is the command to fix the linting errors
"lint:fix": "eslint . --ext .js,.ts,.tsx --fix",
# format is the command to format the code
"format": "prettier --write .",
# format:check is the command to check the formatting
"format:check": "prettier --check .",
# check-all is the command to check the code for errors
"check-all": "npm run typecheck && npm run lint && npm run format:check",
# fix-all is the command to fix the code for errors
"fix-all": "npm run lint:fix && npm run format",
# test is the command to run the tests
"test": "echo \"Error: no test specified\" && exit 1"
```

# Notes

### The locator strategies used

The locators for this app are randomly generated strings. There is some consistency in the way the strings are generated, but they are not consistent across languages. Without being on the team, it is difficult to know what the thinking was behind the locators. I chose ones that worked for the languages I tested. If I was on the team I would have asked for or added myself selectors to the application layouts that would be durable. Most often I add data-testid attributes to the elements I want to select.

### The test data

I went ahead and fetched the data from the API endpoint. It would be trivial to add code to connect to a DB and pull it from there. The same parsing code would still apply. You could drive huge numbers of permutations for testing if fed from a DB, however that testing would be much more sensibly done via the API and leave the UI out of it.

### Code quality

I added linting and formaters to this and set everything up to work with cypress. GitHub Actions CI runs all quality checks and tests on every PR.

### CI/CD

GitHub Actions workflow runs on push/PR:
- TypeScript type checking
- ESLint code quality checks  
- Prettier formatting validation
- Full Cypress test suite

All checks must pass before merging to main branch.

### Page Object Implementation

If I had more time I would more the selectors in the spec out to a seperate file and then import them into the spec. This would make the selectors more readable and maintainable. The page objects can also contain highly reused functions that help key the specs more DRY.

###
