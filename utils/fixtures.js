import { test as base } from "@playwright/test";

export const customtest = base.extend({
    page: async ({ baseURL, page }, use) => {
        await page.goto(baseURL);
        await use(page);

        await page.close();
    },

    authenticatedPage: async ({ baseURL, page }, use) => {
        await page.goto(baseURL);
        await page
            .getByPlaceholder("Username")
            .fill(process.env.STANDARD_USERNAME);
        await page
            .getByPlaceholder("Password")
            .fill(process.env.STANDARD_PASSWORD);
        await page.locator("[value='Login']").click();
        await page.waitForLoadState("networkidle");
        await use(page);

        await page.close();
    },
});

module.exports = { customtest };
