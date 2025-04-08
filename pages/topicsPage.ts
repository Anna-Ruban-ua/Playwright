import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class TopicsPage extends BasePage {
    public issueLinks: Locator;
    public newsLinks: Locator;

    constructor(page: Page) {
        super(page);
        this.issueLinks = page.locator('table.issues td.subject a');
        this.newsLinks = page.locator('article.news-article h3 a');
  }
}