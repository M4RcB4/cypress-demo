const fs = require('fs');
const path = require('path');

const screenshotsDir = process.argv[2] || 'cypress/screenshots';

function analyzeScreenshot(file) {
  // Placeholder for AI-driven analysis.
  // In a real implementation this would send the file to an LLM or other
  // service and evaluate the response.
  console.log(`Analyzing screenshot: ${file}`);
}

if (!fs.existsSync(screenshotsDir)) {
  console.error(`Screenshots directory not found: ${screenshotsDir}`);
  process.exit(0);
}

fs.readdirSync(screenshotsDir).forEach(file => {
  const fullPath = path.join(screenshotsDir, file);
  if (fs.statSync(fullPath).isFile()) {
    analyzeScreenshot(fullPath);
  }
});
