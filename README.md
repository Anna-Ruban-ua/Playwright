# Redmine Autotest Playwright TypeScript

## Summary of Repo

This repository contains automated tests for Redmine, implemented using Playwright and TypeScript. The project follows the Page Object Model (POM). The tests validate core functionalities of Redmine and generate detailed reports.

## Test Cases

Detailed test cases are documented in [this spreadsheet](https://docs.google.com/spreadsheets/d/1GtBWbufhBap-kloWRCJnucLgD4-w5sHwZXUS0TgT3vs/edit?pli=1&gid=0#gid=0).

## Requirements

- Node.js (latest LTS version recommended)
- Playwright
- TypeScript
- Allure Report or ReportPortal (for reporting)
- GitHub (for version control and CI/CD integration)
- GitHub Actions (optional, for CI/CD pipeline)

## Install

1. Clone the repository:
   ```sh
   git clone https://github.com/Anna-Ruban-ua/Playwright
   ```
2. Navigate to the project directory:
   ```sh
   cd Playwright
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Run tests

1. Run tests in headless mode:
   ```sh
   npm run test
   ```
2. Run tests in headed mode:
   ```sh
   npm run test:headed
   ```
3. Open Allure report:
   ```sh
   npm run report:open
   ```
## CI and Allure Report

CI/CD is set up through GitHub Actions. The pipeline is triggered automatically on every push or merge to the main branch. It installs dependencies, runs Playwright tests, generates an Allure report, and publishes the report to GitHub Pages.

Allure Report is used to visualize test results and track test execution with rich analytics and history.