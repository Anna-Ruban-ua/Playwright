import { test, expect } from '../fixtures/loginFixture';
import { generateInvalidPassword } from '../utils/helpers';
import testData from '../constants/testData.json';
import { errorTexts } from '../constants/errorTexts';

test('User authentication with an invalid password', async ({ loginPage }) => {
    const validUsername = testData.validLoginData.username;
    const invalidPassword = generateInvalidPassword();

    await loginPage.openLoginPage();
    await loginPage.login(validUsername, invalidPassword);
    await expect(await loginPage.getLoginError()).toContain(errorTexts.loginError);

});
