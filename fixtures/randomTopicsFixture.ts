import { test as base } from '@playwright/test';
import { TopicsPage } from '../pages/topicsPage';
import { endpoints } from '../constants/endpoints';

export const test = base.extend<{ randomTopics: string[] }>({
  randomTopics: async ({ page }, use) => {
    const topicsPage = new TopicsPage(page);

    const topicEndpoints = [endpoints.issues, endpoints.news];
    let allTopics: string[] = [];

    for (const endpoint of topicEndpoints) {
      await page.goto(endpoint);

      const links = endpoint === endpoints.issues
        ? topicsPage.issueLinks
        : topicsPage.newsLinks;

      const texts = await links.allInnerTexts();
      allTopics.push(...texts);
    }

    const randomTopics = allTopics.sort(() => 0.5 - Math.random()).slice(0, 3);
    await use(randomTopics);
  }
});