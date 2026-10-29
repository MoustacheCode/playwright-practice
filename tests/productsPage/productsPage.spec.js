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
