import { test, expect } from "@playwright/test";

test("live Firebase app is reachable", async ({ page }) => {
  const liveUrl = process.env.STAGING_URL;

  if (!liveUrl) {
    throw new Error("STAGING_URL is not configured");
  }

  await page.goto(liveUrl);
  await expect(page).toHaveTitle("Create Next App");
});
