# 🎋  QA Automation Engineer Assignment

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
QA-Assignment-UI-Automation-Playwright/     # Playwright E2E tests (main focus)
QA-Assignment-Api-Automation-Postman/       # Postman API collections + environments
QA-Assignment-Manual-Test/                  # Manual test cases (docs & Excel/Word)
QA-Assignment-Performance-Test/             # Performance test approach & results
QA-Assignment-Ai-Tool-Usage/                # AI prompts & demo materials
```


**Playwright folder structure** (QA-Assignment-UI-Automation-Playwright):


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
## Tests Overview – placeOrder.spec.ts

This file contains **two end-to-end scenarios** for placing an order in the Tricentis Demo Web Shop using Playwright and the Page Object Model (POM).

### 1. Logged-in User – Place Order
```ts
loginTest("Place order with multiple products via Login", async ({ loginPage }) => {
  await placeOrder({ page: loginPage.page });
});



Simulates an existing user logging in, adding multiple products, and completing checkout.
```

### 2. New User – Register & Place Order
```ts
registerTest("Place order with multiple products via Register", async ({ registerPage }) => {
  await placeOrder({ page: registerPage.page, fillBilling: true });
});

Simulates a new user registering, filling billing/shipping info, adding products, and completing checkout.
```
---
### Required Tools

- **Node.js 18+** (v25.2.1 recommended)  
  - Download the latest version: [Node Js ](https://nodejs.org/en/download)
  - npm (comes bundled with Node.js)

- **Java JDK 8+ (required for Allure reporting ) **  
  - Download: [Oracle Java 17](https://www.oracle.com/java/technologies/javase/jdk17-downloads.html)  
  -  **Set up your JAVA_HOME environment variable.**
  - Instructions: [Set JAVA_HOME](https://confluence.atlassian.com/conf92/setting-the-java_home-variable-in-windows-1477577437.html)



## 🚀 Quick Start – UI Tests


### Install dependencies

```bash
# Navigate to UI project
cd QA-Assignment-UI-Automation-Playwright

# nstall globally via npm:
npm install -g allure-commandline --save-dev

#Verify installation:
allure --version

# Install dependencies
npm install

# Install required browsers
npx playwright install
```

### Environment

Create a `.env` file in the Playwright project inside (QA-Assignment-UI-Automation-Playwright) folder root 

```
EMAIL="zb@zb.com"
PASSWORD="Abc@123"

🚩 **IMPORTANT:** Security Note: These credentials are provided for assignment evaluation purposes only. In a professional environment, sensitive data should never be committed to source control or displayed in a README.

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

- **Manual Testing:** `QA-Assignment-Manual-Test/` — manual test scenarios docs
- **API Testing:** `QA-Assignment-Api-Automation-Postman/` — Postman collections and docs
- **Performance:** `QA-Assignment-Performance-Test/` — performance document
- **AI Tools / Demos:** `QA-Assignment-Ai-Tool-Usage/` — AI tools usage demo file


---

### Summary Guide

```bash

# 1️⃣ Navigate to the project folder
cd QA-Assignment-UI-Automation-Playwright

# 2️⃣ Install Allure Commandline globally (optional)
npm install -g allure-commandline --save-dev

# 3️⃣ Install project dependencies
npm install

# 4️⃣ Install Playwright browsers
npx playwright install

# 5️⃣ Create a .env file in the project root
# Example contents:
# EMAIL="zb@zb.com"
# PASSWORD="Abc@123"

# 6️⃣ Run the Playwright tests
npx playwright test

# 7️⃣ Generate Allure report
allure generate allure-results --clean -o allure-report

# 8️⃣ Open Allure report in browser
allure open allure-report
```

© 2026 ZodaBit | QA Assignment

---

