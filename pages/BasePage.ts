import { Page, Locator } from '@playwright/test';

export class BasePage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(endpoint: string = '') {
        await this.page.goto(endpoint, { waitUntil: 'load' });
    }

    async fillField(locator: Locator, value: string) {
        await locator.fill(value);
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async hoverElement(locator: Locator) {
        await locator.hover();
    }

    async getText(locator: Locator) {
        return await locator.textContent() ?? '';
    }
}