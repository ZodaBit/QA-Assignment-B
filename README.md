# 🎋 Bamboo QA Automation Engineer Assignment

[![Playwright](https://img.shields.io/badge/Playwright-Testing-111?logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Allure](https://img.shields.io/badge/Allure-Report-orange)](https://github.com/allure-framework/allure2)

A concise end-to-end test suite for the **Tricentis Demo Web Shop**. This repository contains UI automation (Playwright), API collections (Postman), manual test doc, and performance docs.

---

## 📁 Repository Layout

Top-level folders (high level):

```
Bamboo-UI-Automation-Playwright/   # Playwright UI tests and helpers
Bamboo-Api-Automation-Postman/      # Postman collections and environments
Bamboo-Manual-Test/                 # Manual test cases and documentation
Bamboo-Performance-Test/            # Performance scripts and results
```

Inside the Playwright project (Bamboo-UI-Automation-Playwright folder) you'll commonly see:

```
components/     # Reusable UI components
fixtures/       # Test fixtures and setup helpers
model/          # Data models and test data shapes
pages/          # Page Object Models (POM)
testData/       # Static JSON test data
tests/          # Playwright test files (*.spec.ts)
playwright.config.ts
package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (or stable LTS)
- npm or pnpm
- Git

### Environment

Create a `.env` file in the Playwright project root (example):

```env
EMAIL="zb@zb.com"
PASSWORD="Abc@123"

🚩 **IMPORTANT:** Security Note: These credentials are provided for assignment evaluation purposes only. In a professional environment, sensitive data should never be committed to source control or displayed in a README.

```

### Install dependencies

```bash
npm install
npx playwright install # installs browsers
```

### Run tests

| Command                                   | Description            |
| ----------------------------------------- | ---------------------- |
| `npm test` or `npx playwright test`       | Run all UI tests       |
| `npx playwright test tests/placeOrder.spec.spec.ts` | Run a single test file |


---

## 📊 Reports (Allure)

Generate and open the Allure report after running tests:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```


---

## 📂 Additional Modules

- **Manual Testing:** `Bamboo-Manual-Test/` — manual test scenarios docs
- **API Testing:** `Bamboo-Api-Automation-Postman/` — Postman collections and docs
- **Performance:** `Bamboo-Performance-Test/` — performance document
- **AI Tools / Demos:** `bonus-ai/` — optional AI-assisted examples


---

© 2026 ZodaBit | Bamboo Assignment

---

