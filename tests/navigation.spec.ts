import { test, expect } from '@playwright/test';

test(
  'clicking repository navigates to details page',
  async ({ page }) => {

    await page.goto('/');

    await page
      .getByTestId('repository-card')
      .first()
      .click();

    await expect(page)
      .toHaveURL(/repository/);
  }
);