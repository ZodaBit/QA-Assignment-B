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


---
### Required Tools

- **Node.js 18+** (v25.2.1 recommended)  
  - Download the latest version: [Node Js ](https://nodejs.org/en/download)
  - npm (comes bundled with Node.js)

- **Java JDK 8+ (required for Allure reporting ) **  
  - Download: [Oracle Java 17](https://www.oracle.com/java/technologies/javase/jdk17-downloads.html)  
  -  **Set up your JAVA_HOME environment variable.**
  - Instructions: [Set JAVA_HOME](https://confluence.atlassian.com/conf92/setting-the-java_home-variable-in-windows-1477577437.html)


- **Allure Commandline**  
  - Download: [Apache Maven](https://maven.apache.org/download.cgi)  
  - Instructions on setting up Maven on Windows: [Setup Guide](https://maven.apache.org/install.html)
  - Instructions on setting video: [Setup Guide video](https://www.youtube.com/watch?v=XEphzGQz-nI).

## 🚀 Quick Start – UI Tests

### Prerequisites for Node and npm
- Node.js 18+ (v25.2.1 recommended)   - Download the latest  version: 
- 
- Java JDK 8+ (required for Allure)

### Prerequisites for allure 
- Node.js 18+ (v25.2.1 recommended)   - Download the latest  version: [Node Js ](https://nodejs.org/en/download)
- npm

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

Create a `.env` file in the Playwright project root (example):

```env
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

© 2026 ZodaBit | QA Assignment

---

