# Version Requirements

This project uses specific versions of tools to ensure consistent execution environments across development, CI/CD, and production.

## Node.js & npm

- **Node.js**: `20.14.0` (LTS)
- **npm**: `10.8.2` (exact version)

### Version Files:

- `.nvmrc` - Node Version Manager (nvm) file
- `.tool-versions` - asdf version manager file
- `package.json` - engines field for npm install warnings
- `package.json` - packageManager field for exact npm version

### Usage:

```bash
# Using nvm
nvm use

# Using asdf
asdf install

# Check versions match
node --version  # Should show v20.14.0
npm --version   # Should show 10.8.2
```

## Key Dependencies

| Tool        | Version | Purpose                       | Notes                      |
| ----------- | ------- | ----------------------------- | -------------------------- |
| Cypress     | ^14.5.0 | E2E testing framework         | Latest stable              |
| TypeScript  | ^5.8.3  | Type checking and compilation | Compatible with Cypress 14 |
| ESLint      | ^9.29.0 | Code linting and quality      | Latest with flat config    |
| Prettier    | ^3.6.1  | Code formatting               | Latest stable              |
| @types/node | ^24.0.4 | Node.js type definitions      | Required for TypeScript    |

## Cypress Compatibility Matrix

| Cypress Version | Node.js Min | Node.js Recommended | TypeScript | Notes            |
| --------------- | ----------- | ------------------- | ---------- | ---------------- |
| 14.x            | 18.17.0     | 20.x LTS            | 5.x        | Current stable   |
| 13.x            | 18.17.0     | 20.x LTS            | 5.x        | Maintenance mode |
| 12.x            | 16.x        | 18.x LTS            | 4.x        | EOL              |

## Browser Requirements

- **Chrome**: Latest stable (for Cypress tests)
- **Electron**: Bundled with Cypress

## CI/CD Environment

GitHub Actions uses:

- **OS**: ubuntu-latest
- **Node.js**: Version from `.nvmrc` file
- **Browser**: Chrome (headless)
- **Cypress**: 14.5.0

## Development Setup

1. **Install Node.js version manager**:

   ```bash
   # nvm (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

   # or asdf
   git clone https://github.com/asdf-vm/asdf.git ~/.asdf
   ```

2. **Use correct Node.js version**:

   ```bash
   nvm install  # Reads .nvmrc automatically
   nvm use      # Switches to .nvmrc version
   ```

3. **Install dependencies**:

   ```bash
   npm ci  # Uses exact versions from package-lock.json
   ```

4. **Verify setup**:
   ```bash
   npm run check-all  # Runs all quality checks
   npx cypress verify # Verifies Cypress installation
   ```

## Known Compatibility Issues

### ✅ Resolved:

- **Node.js 20.x**: Fully compatible with Cypress 14.x
- **TypeScript 5.x**: No known issues with Cypress 14.x
- **ESLint 9.x**: Flat config format works well
- **npm 10.x**: Latest features and security updates

### ⚠️ Avoid:

- **Node.js < 18.17.0**: Not supported by Cypress 14.x
- **TypeScript < 5.0**: May have type definition issues
- **npm < 10.0**: Missing security updates and features

## Why Version Locking?

- **Consistency**: Same versions across all environments
- **Reproducibility**: Builds work the same for everyone
- **Stability**: Avoid breaking changes from version drift
- **CI/CD**: Prevents "works on my machine" issues
- **Team collaboration**: Everyone uses same tooling versions
- **Security**: Latest patches and security updates

## Updating Versions

When updating versions:

1. **Check Cypress compatibility matrix** above
2. Update `.nvmrc` with new Node.js version
3. Update `.tool-versions` to match
4. Update `package.json` engines and packageManager fields
5. Test locally with `npm run check-all`
6. Run `npx cypress verify` to ensure compatibility
7. Update this documentation

## Community Standards

This setup follows Cypress community best practices:

- ✅ Uses LTS Node.js versions
- ✅ Latest stable Cypress version
- ✅ TypeScript for type safety
- ✅ ESLint + Prettier for code quality
- ✅ Version locking for consistency
- ✅ CI/CD integration
