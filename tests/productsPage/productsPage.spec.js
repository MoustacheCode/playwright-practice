import { customtest } from "../../utils/fixtures.js";
import { POManager } from "../../pageobjects/POManager.js";
import { expect } from "@playwright/test";

customtest("Add Backpack to cart test", async ({ authenticatedPage }) => {
    const poManager = new POManager(authenticatedPage);
    const productsPage = poManager.getProductsPage();
    await productsPage.backPackButton.click();
    await expect(productsPage.removeBackPackButton).toBeVisible();
});

customtest(
    "Products can be sorted by price low to high",
    async ({ authenticatedPage }) => {
        const poManager = new POManager(authenticatedPage);
        const productsPage = poManager.getProductsPage();
        await productsPage.sortDropdown.selectOption("lohi");
        const names = await productsPage.productName.allTextContents();
        await expect(productsPage.productName.first()).toHaveText(
            "Sauce Labs Onesie",
        );
    },
);

customtest(
    "Products can be sorted by price high to low",
    async ({ authenticatedPage }) => {
        const poManager = new POManager(authenticatedPage);
        const productsPage = poManager.getProductsPage();
        await productsPage.sortDropdown.selectOption("hilo");
        const names = await productsPage.productName.allTextContents();
        await expect(productsPage.productName.first()).toHaveText(
            "Sauce Labs Fleece Jacket",
        );
    },
);

customtest(
    "Products can be sorted by name A to Z",
    async ({ authenticatedPage }) => {
        const poManager = new POManager(authenticatedPage);
        const productsPage = poManager.getProductsPage();
        await productsPage.sortDropdown.selectOption("az");
        const names = await productsPage.productName.allTextContents();
        await expect(productsPage.productName.first()).toHaveText(
            "Sauce Labs Backpack",
        );
    },
);

customtest(
    "Products can be sorted by name Z to A",
    async ({ authenticatedPage }) => {
        const poManager = new POManager(authenticatedPage);
        const productsPage = poManager.getProductsPage();
        await productsPage.sortDropdown.selectOption("za");
        const names = await productsPage.productName.allTextContents();
        await expect(productsPage.productName.first()).toHaveText(
            "Test.allTheThings() T-Shirt (Red)",
        );
    },
);

customtest(
    "Adding and removing product shows and hides badge",
    async ({ authenticatedPage }) => {
        const poManager = new POManager(authenticatedPage);
        const productsPage = poManager.getProductsPage();

        await productsPage.backPackButton.click();
        const badgeCount = await productsPage.getCartBadgeCount();
        expect(badgeCount).toBe(1);

        await productsPage.removeBackPackButton.click();
        const emptyBadge = await productsPage.getCartBadgeCount();
        expect(emptyBadge).toBe(0);
    },
);

customtest(
    "Adding multiple product shows badge with correct number",
    async ({ authenticatedPage }) => {
        const poManager = new POManager(authenticatedPage);
        const productsPage = poManager.getProductsPage();
        const productsToAdd = 3;

        for (let i = 0; i < productsToAdd; i++) {
            await productsPage.addToCartButton.nth(i).click();
        }

        const badgeCount = await productsPage.getCartBadgeCount();
        expect(badgeCount).toBe(3);
    },
);
