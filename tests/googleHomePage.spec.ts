import { test, expect } from '@playwright/test';

test('googleTest', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
  await expect(page.getByRole('navigation')).toContainText('About');
  await expect(page.getByRole('navigation')).toContainText('Store');
  await expect(page.getByLabel('Gmail')).toContainText('Gmail');
  await expect(page.getByLabel('Search for Images')).toContainText('Images');
  await expect(page.getByLabel('Sign in')).toContainText('Sign in');
  await expect(page.getByRole('search')).toContainText('Google Search');
  await expect(page.getByRole('search')).toContainText('I\'m Feeling Lucky');
  await expect(page.locator('#SIvCob')).toContainText('Google offered in:');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Search in google');
  await expect(page.getByRole('combobox', { name: 'Search' })).toHaveValue('Search in google');
  await page.waitForTimeout(2000);
});