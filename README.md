```markdown
# 🚀 Advanced Playwright-TypeScript Hybrid Automation Framework

A high-performance, enterprise-grade automation framework built with **Playwright** and **TypeScript**. This project implements a modern **Function-based Page Object Model (POM)** architecture, designed for scalability, reusability, and seamless CI/CD integration.

---

## 🌟 Key Features

- **Hybrid Architecture:** Combines Page Object Model (POM) with Data-Driven Testing.
- **Function-based POM:** A modern approach utilizing pure functions instead of classes to reduce memory overhead and improve maintainability.
- **Custom Utility Wrappers:** Centralized wrappers for **Actions**, **Locators**, and **Assertions** to ensure robust error handling and clean test scripts.
- **20+ E2E Test Cases:** Comprehensive coverage of an E-commerce platform (Sauce Demo), including:
    - Authentication & Error Handling
    - Dynamic Product Sorting (A-Z, Price Low-High, etc.)
    - Multi-page Shopping Cart Validations
    - End-to-End Checkout Pipeline
- **Professional Reporting:** Integrated with **Allure Reports** for graphical insights and Playwright's native HTML reports.
- **CI/CD Ready:** Configured with **GitHub Actions** for automated cloud execution on every push/pull request.
- **Cross-Browser Testing:** Supports Chromium, Firefox, and WebKit.

---

## 🛠️ Tech Stack

- **Tool:** [Playwright](https://playwright.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Reporting:** Allure Report & Playwright HTML Report
- **CI/CD:** GitHub Actions
- **Version Control:** Git/GitHub

---

## 📁 Project Structure

```text
├── .github/workflows/     # CI/CD Pipeline configurations
├── src/
│   └── vasu-playwright/
│       ├── utils/         # Custom Action, Assert, and Locator wrappers
│       └── setup/         # Global setup/teardown and page configurations
├── tests/
│   ├── pages/             # Page Object Model (POM) functions
│   ├── specs/             # Actual test scripts (.spec.ts)
├── testdata/              # Externalized test data files
├── playwright.config.ts   # Playwright global configuration
└── package.json           # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/AutomationWithPiyushhh/automation-playwright-ts.git](https://github.com/AutomationWithPiyushhh/automation-playwright-ts.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd automation-playwright-ts
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## 🧪 Running Tests

- **Run all tests (Headless):**
  ```bash
  npm run test:chromium
  ```
- **Run tests in Headed mode:**
  ```bash
  npm run test:chromium-headed
  ```
- **Open Playwright UI Mode:**
  ```bash
  npm run ui
  ```

---

## 📊 Reporting

- **Generate & Open Allure Report:**
  ```bash
  npm run allure
  ```
- **View Playwright HTML Report:**
  ```bash
  npm run report
  ```

---

## 👤 Author

**Piyush Baldaniya**
- **Role:** QA Automation Engineer & Technical Trainer
- **Location:** Noida, Uttar Pradesh, India
- **Connect:** [LinkedIn](https://linkedin.com/in/piyush-baldaniya) | [Portfolio](https://automationwithpiyush.vercel.app/)
- **Email:** automation.with.piyush@gmail.com

---
*Developed with ❤️ for the QA Community.*
```
