import { test, expect } from '@playwright/test';

test('repository cards are displayed', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByTestId('repository-card').first()
  ).toBeVisible();
});