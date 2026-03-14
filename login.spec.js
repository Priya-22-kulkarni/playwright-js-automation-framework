// Sample test case using Playwright
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Verify user can login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});