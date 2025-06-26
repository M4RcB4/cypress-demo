# Branch Protection Setup

To make the CI checks blocking for commits, configure branch protection rules in GitHub:

## Required Status Checks

Go to **Settings > Branches > Add rule** for your main branch and enable:

### Required Checks:
- ✅ `Code Quality Checks` 
- ✅ `Cypress E2E Tests`

### Settings to Enable:
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ✅ **Restrict pushes that create files larger than 100MB**

## What This Blocks:

- Direct pushes to main branch without PR
- Merging PRs with failing TypeScript checks
- Merging PRs with linting errors  
- Merging PRs with formatting issues
- Merging PRs with failing Cypress tests

## Manual Setup Steps:

1. Push this workflow to your repository
2. Go to repository **Settings > Branches**
3. Click **Add rule** 
4. Enter branch name pattern: `main`
5. Check **Require status checks to pass before merging**
6. Search and select the status checks:
   - `Code Quality Checks`
   - `Cypress E2E Tests`
7. Save the protection rule

The CI will now run on every push and PR, and block merging if any checks fail. 