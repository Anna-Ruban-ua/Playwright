import { BasePage } from './basePage';
import { Page, Locator } from '@playwright/test';
import { endpoints } from '../constants/endpoints';

export class LoginPage extends BasePage {
    public usernameInput: Locator;
    public passwordInput: Locator;
    public loginButton: Locator;
    public errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-submit');
        this.errorMessage = page.locator('#flash_error');
    }

    async openLoginPage () {
        await this.goto(endpoints.login);
    }

    async login(username: string, password: string) {
        await this.fillField(this.usernameInput, username);
        await this.fillField(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

    async getLoginError() {
        return await this.getText(this.errorMessage);
    }

}
