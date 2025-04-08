import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import testData from '../constants/testData.json';

export const test = base.extend<{
  loginPage: LoginPage;
  validLoginData: typeof testData.validLoginData;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  validLoginData: async ({}, use) => use(testData.validLoginData),
});

export { expect };
