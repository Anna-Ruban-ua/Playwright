import { test } from '../fixtures/randomTopicsFixture';
import { expect } from '@playwright/test';
import { SearchPage } from '../pages/searchPage';

test('Verify Search Functionality with Random Topics', async ({ page, randomTopics }) => {
  const searchPage = new SearchPage(page);
  await searchPage.openSearchPage();

  for (const topic of randomTopics) {
    await searchPage.search(topic);
    const resultText = await searchPage.searchAndGetResults(topic);
    const found = resultText.toLowerCase().includes(topic.toLowerCase());
    expect(found).toBeTruthy();
  }
});


