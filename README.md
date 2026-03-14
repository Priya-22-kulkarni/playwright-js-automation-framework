# Playwright JavaScript Automation Sample Project

This is a sample **Playwright Automation Framework** implemented using **JavaScript** and **Page Object Model (POM)**.

## Features
- Playwright Test Runner
- Page Object Model Framework
- Sample Login Test
- HTML Report Generation
- Screenshot and Video on Failure

## Project Structure

playwright-js-sample-project
│
├── pages
│   └── LoginPage.js
│
├── tests
│   └── login.spec.js
│
├── utils
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md

## Sample Test Scenario

Test Case: Verify user login functionality

Steps:
1. Navigate to SauceDemo website
2. Enter valid username and password
3. Click login
4. Verify inventory page loads successfully

## Command to Run Tests

npm install
npx playwright install
npm test

## Report

After execution:
npx playwright show-report