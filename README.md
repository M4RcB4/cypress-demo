# cypress-demo

Cypress automation testing Google Translate language detection

## Setup

```bash
# Use correct Node.js version (optional but recommended)
nvm use

# Install dependencies
npm install
```

**Note**: This project uses Node.js 20.14.0. See `VERSIONS.md` for details.

# NPM scripts and what they do

```bash
# cypress open is the command to open the cypress UI
"cy:open": "cypress open",
# cypress run is the command to run the cypress tests
"cy:run": "cypress run",
# cypress verify is the command to verify cypress installation
"cy:verify": "cypress verify",
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
# security:audit is the command to audit dependencies for vulnerabilities
"security:audit": "npm audit --audit-level=moderate",
# security:outdated is the command to check for outdated dependencies
"security:outdated": "npm outdated",
# security:check is the command to run all security checks
"security:check": "npm audit --audit-level=moderate && npm outdated",
# verify:install is the command to verify package-lock.json consistency
"verify:install": "npm ci --dry-run",
# verify:clean is the command to verify clean install works
"verify:clean": "rm -rf node_modules package-lock.json && npm install",
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

GitHub Actions workflow runs on push/PR with 4 parallel jobs:

**Code Quality Checks:**

- TypeScript type checking
- ESLint code quality validation
- Prettier formatting verification
- Cypress installation verification

**Security & Dependency Checks:**

- npm audit for vulnerabilities (moderate+)
- Outdated dependency detection
- package-lock.json consistency
- License compliance checking

**Cypress E2E Tests:**

- Full end-to-end test suite
- Chrome browser testing
- Screenshot/video artifacts on failure

**Build & Package Verification:**

- Clean install verification
- Package.json validity
- Script functionality validation

All checks must pass before merging to main branch.

### Page Object Implementation

If I had more time I would more the selectors in the spec out to a seperate file and then import them into the spec. This would make the selectors more readable and maintainable. The page objects can also contain highly reused functions that help key the specs more DRY.

###
