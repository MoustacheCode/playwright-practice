import { LoginPage } from "./LoginPage";
import { ProductsPage } from "./ProductsPage";

export class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productsPage = new ProductsPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getProductsPage() {
        return this.productsPage;
    }
}
