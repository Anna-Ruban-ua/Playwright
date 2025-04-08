import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';
import { endpoints } from '../constants/endpoints';

export class SearchPage extends BasePage {
    public searchInput: Locator;
    public searchButton: Locator;
    public searchResults: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('#search-input');
        this.searchButton = page.locator('input[type="submit"]');
        this.searchResults = page.locator('#search-results');
    }

    async openSearchPage() {
        await this.goto(endpoints.searchPage);
    }

    async search(query: string) {
        await this.fillField(this.searchInput, query);
        await this.clickElement(this.searchButton);
    }

    async getSearchResults() {
        return await this.getText(this.searchResults);
    }

    async searchAndGetResults(query: string) {
        await this.search(query);
        return await this.getSearchResults();
    }    
}