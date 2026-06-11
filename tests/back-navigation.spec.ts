import { test, expect } from '@playwright/test';

test(
  'browser back button returns to dashboard',
  async ({ page }) => {

    await page.goto('/');

    await page
      .getByTestId('repository-card')
      .first()
      .click();

    await page.goBack();

    await expect(page)
      .toHaveURL('/');
  }
);