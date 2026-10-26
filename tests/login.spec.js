import { customtest } from "../utils/fixtures.js";
const { POManager } = require("../pageobjects/POManager.js");
const { expect } = require("@playwright/test");

customtest("Valid Login", async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const userNameInput = process.env.STANDARD_USERNAME;
    const passwordInput = process.env.STANDARD_PASSWORD;
    await loginPage.validLogin(userNameInput, passwordInput);
    const productsPage = poManager.getProductsPage();
    await expect(productsPage.title).toBeVisible();
});
