const { test, expect } = require('@playwright/test');

// Disable TimeOut 
// test.setTimeout(0);

test.beforeEach(async ({ page }) => {
  await page.goto('https://eael.site/advanced-search/');
})

test.afterEach(async ({ page }) => {
  await page.close();
});

// All 3 items items should be visible properly 

test('Advanced search needs to load properly', async ({ page }) => {

  // 1

  await expect.soft(page.getByRole('heading', { name: 'Stunning Advanced Live Search' })).toBeVisible();
  await expect.soft(page.locator('#eael-advanced-search-widget-c49ccf4').getByPlaceholder('Enter Search Keyword')).toBeVisible();
  await expect.soft(page.locator('#eael-advanced-search-widget-c49ccf4').getByRole('button', { name: 'search' })).toBeVisible()

  // 2

  await expect.soft(page.getByRole('heading', { name: 'Customize To Match Your Site Aesthetics' })).toBeVisible()
  await expect.soft(page.locator('#eael-advanced-search-widget-d1bda42').getByPlaceholder('Enter Search Keyword 2')).toBeVisible();
  await expect.soft(page.locator('#eael-advanced-search-widget-d1bda42').getByRole('button', { name: 'search 2' })).toBeVisible();

  // 3

  await expect.soft(page.getByRole('heading', { name: 'Allow Users To Search With Category Tags' })).toBeVisible()
  await expect.soft(page.locator('#eael-advanced-search-widget-578f58e').getByPlaceholder('Enter Search Keyword 3')).toBeVisible();
  await expect.soft(page.locator('#eael-advanced-search-widget-578f58e').getByRole('button', { name: 'search 3' })).toBeVisible();
  await expect.soft(page.locator('#eael-advanced-search-widget-578f58e').getByRole('combobox')).toBeVisible();
  // await page.pause()
  await expect.soft(page.locator('#eael-advanced-search-widget-578f58e').getByRole('heading', { name: 'Popular Keywords' })).toBeVisible();
  await expect.soft(page.locator('#eael-advanced-search-widget-578f58e').getByRole('link', { name: 'Advance', exact: true })).toBeVisible();
})


// All 3 items Search Functionility should be work properly

// 1

test('Search Functionility should be work properly', async ({ page }) => {

  await page.locator('#eael-advanced-search-widget-c49ccf4').getByPlaceholder('Enter Search Keyword', { exact: true }).click();
  await page.locator('#eael-advanced-search-widget-c49ccf4').getByPlaceholder('Enter Search Keyword', { exact: true }).fill('home');
  await page.waitForTimeout(1000);
  await page.locator('#eael-advanced-search-widget-c49ccf4').getByPlaceholder('Enter Search Keyword', { exact: true }).press('Backspace');
  await page.waitForTimeout(1000);
  await page.locator('#eael-advanced-search-widget-c49ccf4').getByRole('link', { name: 'Home CONTENT ELEMENTS (22)' }).click();
  await expect.soft(page.getByRole('heading', { name: 'CONTENT ELEMENTS (22)' })).toBeVisible();

})

// 2

test('Search Functionility should be work properly 2', async ({ page }) => {

  await page.locator('#eael-advanced-search-widget-d1bda42').getByPlaceholder('Enter Search Keyword 2', { exact: true }).click();
  await page.locator('#eael-advanced-search-widget-d1bda42').getByPlaceholder('Enter Search Keyword 2', { exact: true }).fill('advanced tooltip');
  await page.waitForTimeout(1000);
  await page.locator('#eael-advanced-search-widget-d1bda42').getByPlaceholder('Enter Search Keyword 2', { exact: true }).press('Backspace');
  await page.waitForTimeout(1000);
  await page.locator('#eael-advanced-search-widget-d1bda42').getByRole('link', { name: 'Advanced Tooltip Click Effect' }).click();
  await expect.soft(page.getByRole('heading', { name: 'Advanced Tooltip' })).toBeVisible();

})

// 3

test('Search Functionility should be work properly 3', async ({ page }) => {

  await page.locator('#eael-advanced-search-widget-578f58e').getByPlaceholder('Enter Search Keyword 3', { exact: true }).click();
  await page.locator('#eael-advanced-search-widget-578f58e').getByPlaceholder('Enter Search Keyword 3', { exact: true }).fill('how to');
  await page.waitForTimeout(1000);
  await page.locator('#eael-advanced-search-widget-578f58e').getByPlaceholder('Enter Search Keyword 3', { exact: true }).press('Backspace');
  await page.waitForTimeout(1000);
  await page.locator('#eael-advanced-search-widget-578f58e').getByRole('link', { name: 'How To Easily Start Online Garden Plant Store Website With Elementor Ready Template You can now create an appealing garden plant store website using the complete Greenzone Elementor template pack by Templately without coding for free.', exact: true }).click();
  await expect.soft(page.getByRole('heading', { name: 'Easy & Convenient To Reach Out Targeted Audiences' })).toBeVisible();

})