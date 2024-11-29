import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Browser } from 'webdriverio';

const browser: Browser = global.browser;
Given('I visit the weather app', async () => {
  
  await browser.url('http://localhost:3001');
  
  await browser.waitUntil(
    async () => {
      const title = await browser.getTitle();
      return title.includes('React App');
    },
    {
      timeout: 10000,
      timeoutMsg: 'Page did not load in time',
    }
  );
});


When('I search for {string}', async (city: string) => {
  const searchInput = await browser.$('input[placeholder="Search"]');
  await searchInput.clearValue();
  await searchInput.addValue(city);
  const searchIcon = await browser.$('div.search-icon-wrapper');
  await searchIcon.click();
});

Then('I should see weather results for {string}', async (city: string) => {
  const cityName = await browser.$('h2.city-name');
  const text = await cityName.getText();
  expect(text).to.include(city);
});
