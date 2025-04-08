import config from '../playwright.config';

export const baseURL = config.use?.baseURL as string;