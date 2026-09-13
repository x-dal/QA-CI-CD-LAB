import { test, expect } from "@playwright/test";

test("home page loads", async ({ page }) => {
  console.log("Running in environment:", process.env.APP_ENV);
  await page.goto("/");
  await expect(page).toHaveTitle("Create Next App");
});
