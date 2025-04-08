import { BasePage } from './basePage';
import { Page, Locator } from '@playwright/test';

export class MyPage extends BasePage {
    public logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.logoutButton = page.locator('.logout');
    }

    async logout() {
        await this.clickElement(this.logoutButton);
    }
}