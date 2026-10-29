export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator(".app_logo");
        this.productCard = page.locator(".inventory_item");
        this.productPrice = page.locator(".inventory_item_price");
        this.productName = page.locator(".inventory_item_name");
        this.sortDropdown = page.locator(".product_sort_container");
        this.cartBadge = page.locator(".shopping_cart_badge");
        this.removeBackPackButton = page.locator("#remove-sauce-labs-backpack");
        // this.removeBackPackButton = page.locator("button");
        // this.addToCartButton = page.locator("button");
        this.backPackButton = page.locator("#add-to-cart-sauce-labs-backpack");
        this.burgerMenu = page.locator(".bm-burger-button");
        this.cartBadge = page.locator(".shopping_cart_badge");
    }

    async getCartBadgeCount() {
        if (!(await this.cartBadge.isVisible())) {
            return 0;
        }
        return Number(await this.cartBadge.innerText());
    }
}
