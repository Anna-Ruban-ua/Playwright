import { test, expect } from '../fixtures/loginFixture';
import { endpoints } from '../constants/endpoints';

test('User authentication with valid password', async ({ loginPage, validLoginData, page }) => {
    await loginPage.openLoginPage();
    await loginPage.login(validLoginData.username, validLoginData.password);
    await expect(page).toHaveURL(new RegExp(endpoints.myPage));
});
