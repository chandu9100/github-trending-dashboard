import { test, expect } from '@playwright/test';

test(
  'error message displayed when API fails',
  async ({ page }) => {

    await page.route(
      '**/search/repositories**',
      route => route.abort()
    );

    await page.goto('/');

    await expect(
      page.getByText(
        'Unable to load repositories'
      )
    ).toBeVisible();
  }
);