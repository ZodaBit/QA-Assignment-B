# 🎋 Bamboo QA Automation Engineer Assignment

[![Playwright](https://img.shields.io/badge/Playwright-Testing-45ba4b?logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Allure](https://img.shields.io/badge/Allure-Report-orange)](https://github.com/allure-framework/allure2)

Complete end-to-end testing solution for **Tricentis Demo Web Shop** including:

- UI Automation (Playwright + TypeScript + POM)
- API Testing (Postman collections)
- Manual Test Cases
- Performance Testing documentation
- Bonus: AI-assisted test creation demo

---

## 📁 Repository Structure


Top-level folders (high level):

```
Bamboo-UI-Automation-Playwright/     # Playwright E2E tests (main focus)
Bamboo-Api-Automation-Postman/       # Postman API collections + environments
Bamboo-Manual-Test/                  # Manual test cases (docs & Excel/Word)
Bamboo-Performance-Test/             # Performance test approach & results
Bamboo-Ai-Tool-Usage/                # AI prompts & demo materials
```


**Playwright folder structure** (Bamboo-UI-Automation-Playwright):


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


---

## 🚀 Quick Start – UI Tests

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm / pnpm

### Setup
```bash
# Navigate to UI project
cd Bamboo-UI-Automation-Playwright

# Install dependencies
npm install

# Install required browsers
npx playwright install
```
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

### Run Tests

| Command                                   | Description            |
| ----------------------------------------- | ---------------------- |
|  `npx playwright test`       | Run all UI tests       |
| `npx playwright test tests/placeOrder.spec.spec.ts` | Run a single test file |


---

## 📊 Reports (Allure)

Generate and open the Allure report after running tests:

# Generate report
```allure generate allure-results --clean -o allure-report```

# Open in browser
```allure open allure-report```


---

## 📂 Additional Modules

- **Manual Testing:** `Bamboo-Manual-Test/` — manual test scenarios docs
- **API Testing:** `Bamboo-Api-Automation-Postman/` — Postman collections and docs
- **Performance:** `Bamboo-Performance-Test/` — performance document
- **AI Tools / Demos:** `Bamboo-Ai-Tool-Usage/` — AI tools usage demo file


---

© 2026 ZodaBit | Bamboo Assignment

---

