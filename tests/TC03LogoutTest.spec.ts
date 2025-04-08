import { test, expect } from '../fixtures/loginFixture';
import { MyPage } from '../pages/myPage';
import { baseURL } from '../constants/baseUrl';

test('Logout', async ({ loginPage, validLoginData, page }) => {
    const myPage = new MyPage(page);

    await loginPage.openLoginPage();
    await loginPage.login(validLoginData.username, validLoginData.password);
    await myPage.logout();
    await expect(page).toHaveURL(new RegExp(`${baseURL}/?$`));

});