# Branch Protection Setup

To make the CI checks blocking for commits, configure branch protection rules in GitHub:

## Required Status Checks

Go to **Settings > Branches > Add rule** for your main branch and enable:

### Required Checks:

- ✅ `Code Quality Checks`
- ✅ `Security & Dependency Checks`
- ✅ `Cypress E2E Tests`
- ✅ `Build & Package Verification`

### Settings to Enable:

- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ✅ **Restrict pushes that create files larger than 100MB**

### Optional (Recommended):

- ✅ **Require pull request reviews before merging** (1 reviewer)
- ✅ **Dismiss stale pull request approvals when new commits are pushed**
- ✅ **Require review from code owners**

## What Each Check Does:

### Code Quality Checks

- TypeScript type checking
- ESLint code quality validation
- Prettier formatting verification
- Cypress installation verification

### Security & Dependency Checks

- npm audit for vulnerabilities (moderate+ severity)
- Outdated dependency detection
- package-lock.json consistency verification
- License compliance checking

### Cypress E2E Tests

- Full end-to-end test suite execution
- Chrome browser testing
- Screenshot/video artifact collection on failures

### Build & Package Verification

- Clean install verification
- Package.json validity checking
- Script functionality validation

## What This Blocks:

- Direct pushes to main branch without PR
- Merging PRs with failing TypeScript checks
- Merging PRs with linting errors
- Merging PRs with formatting issues
- Merging PRs with security vulnerabilities
- Merging PRs with outdated dependencies
- Merging PRs with failing Cypress tests
- Merging PRs with build/package issues

## Manual Setup Steps:

1. Push this workflow to your repository
2. Go to repository **Settings > Branches**
3. Click **Add rule**
4. Enter branch name pattern: `main`
5. Check **Require status checks to pass before merging**
6. Search and select the status checks:
   - `Code Quality Checks`
   - `Security & Dependency Checks`
   - `Cypress E2E Tests`
   - `Build & Package Verification`
7. Save the protection rule

The CI will now run on every push and PR, and block merging if any checks fail.
