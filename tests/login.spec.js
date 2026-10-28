import { customtest } from "../utils/fixtures.js";
import { POManager } from "../pageobjects/POManager.js";
import { expect } from "@playwright/test";

customtest("Valid Login", async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const userNameInput = process.env.STANDARD_USERNAME;
    const passwordInput = process.env.STANDARD_PASSWORD;
    await loginPage.login(userNameInput, passwordInput);
    const productsPage = poManager.getProductsPage();
    await expect(productsPage.title).toBeVisible();
});

customtest("Invalid Login Password Error Message", async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const userNameInput = process.env.STANDARD_USERNAME;
    const passwordInput = "incorrectpassword";
    await loginPage.login(userNameInput, passwordInput);

    await expect(loginPage.loginErrorMessage).toBeVisible();
    await expect(loginPage.loginErrorMessage).toHaveText(
        "Epic sadface: Username and password do not match any user in this service",
    );
});
