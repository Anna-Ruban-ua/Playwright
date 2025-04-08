import { BasePage } from './basePage'
import { Page, Locator } from '@playwright/test';
import { navigationLinks } from '../constants/navigationLinks';

export class HomePage extends BasePage {
    navigationMap: Record<string, { locator: Locator; endpoint: string }> = {};
    public homeButton: Locator;
    public newObject: Locator;
    public newIssue: Locator;
    public newWiki: Locator;

    constructor(page: Page) {
        super(page);
        this.homeButton = page.locator('a.home');

        this.newObject = page.locator('#new-object');
        this.newIssue = page.locator('a.new-issue-sub');
        this.newWiki = page.locator('a.new-wiki-page');
        for (const link of navigationLinks) {
            this.navigationMap[link.name] = {
              locator: page.locator(link.selector),
              endpoint: link.endpoint,
            };
        }
    }

    async clickHomeButton () {
        await this.clickElement(this.homeButton);
    }

    async hoverNewObject () {
        await this.hoverElement(this.newObject);
    }

    get hoverOptions () {
        return {
            newIssue: this.newIssue,
            newWiki: this.newWiki,
        };
    }
}