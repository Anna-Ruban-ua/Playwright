import { test, expect } from '../fixtures/loginFixture';
import { HomePage } from '../pages/homePage';

test('All Menu Elements are displayed and loading', async ({ loginPage, validLoginData, page }) => {
    const homePage = new HomePage(page);
    const options = homePage.hoverOptions;
    
    await loginPage.openLoginPage();
    await loginPage.login(validLoginData.username, validLoginData.password);

    await homePage.clickHomeButton();
    await homePage.hoverNewObject();
    for (const element of [options.newIssue, options.newWiki]) {
        await expect(element).toBeVisible();
    }
      
    for (const { locator, endpoint } of Object.values(homePage.navigationMap)) {
        await homePage.clickElement(locator);
        await expect(page).toHaveURL(endpoint);
    }
});