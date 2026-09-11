import {test, expect} from '@playwright/test';

test("Live firebase app is reachable", async ({page}) => {

    await page.goto("https://my-web-app--qa-ci-lab-test.us-east4.hosted.app/");
    await expect(page).toHaveTitle("Create Next App");
    })