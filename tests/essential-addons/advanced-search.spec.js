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
  await expect.soft(page.locator('#eael-advanced-search-widget-578f58e').getByText('Popular Keywords Advance')).toBeVisible();
  await expect.soft(page.locator('#eael-advanced-search-widget-578f58e').getByRole('link', { name: 'Advance' })).toBeVisible();
})
