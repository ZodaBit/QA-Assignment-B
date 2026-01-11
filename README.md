Bamboo UI Automation — Playwright Project

This repository contains automated end-to-end UI tests for the Tricentis Demo Web Shop using Playwright and TypeScript, with Allure for reporting.

Project Folder Structure
bamboo-ui-automation-playwright/
 ├── components/       # Reusable UI components (e.g., HeaderComponent, FooterComponent)
 ├── fixtures/         # Test fixtures (common setup for tests)
 ├── models/           # Data models for tests
 ├── pages/            # Page Object Models (e.g., LoginPage, HomePage, ProductListPage)
 ├── testdata/         # Test data files
 ├── tests/            # Playwright test files (e.g., login.spec.ts, checkout.spec.ts)
 ├── bamboo-manual-test/   # Manual test assignments
 ├── bamboo-api-automation/ # Postman collections
 ├── bonus-ai/         # AI tools demonstration for development
 ├── .env              # Environment variables
 ├── package.json      # NPM dependencies
 └── playwright.config.ts   # Playwright configuration

Environment Setup

Create a .env file in the root folder of bamboo-ui-automation-playwright.

Add your credentials:

EMAIL="zb@zb.com"
PASSWORD="Abc@123"
BASE_URL="https://demowebshop.tricentis.com"


Install dependencies:

npm install


Install Playwright browsers:

npx playwright install

Running UI Automation Tests
Run All Tests
npx playwright test

Run a Specific Test
npx playwright test tests/login.spec.ts

Generating and Viewing Allure Reports

After running the tests, generate the Allure report:

allure generate allure-results --clean -o allure-report
allure open allure-report


allure-results → generated automatically by allure-playwright

allure-report → HTML report folder to open in a browser

Test Data and Reusability

Test Data: Use .env or files in testdata/ folder for emails, passwords, or product info.

Page Objects: All pages are in pages/ folder, reusable across tests.

Components: UI components (header, footer, etc.) are in components/.

Fixtures: Common test setup like login, navigation, or browser setup are in fixtures/.

Manual Test Assignments

Manual test cases for Bamboo assignments are stored in bamboo-manual-test/.

Postman collections for API testing are in bamboo-api-automation/.

Bonus: AI Tools for Accelerating Development

AI tools like ChatGPT can help:

Generate Page Object Models.

Write test scripts in Playwright.

Draft manual test cases.

All AI demo files are stored in bonus-ai/.

Recommended VS Code Extensions

Playwright Test for VS Code

TypeScript

DotENV (for .env file support)

✅ Summary of Workflow:

Create .env with credentials.

Run tests: npx playwright test

Generate Allure report: allure generate allure-results --clean -o allure-report

Open report: allure open allure-report

This setup ensures you can quickly run automation tests, view reports, and manage test data efficiently.