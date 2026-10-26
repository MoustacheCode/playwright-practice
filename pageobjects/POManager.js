const { LoginPage } = require("./LoginPage");
const { ProductsPage } = require("./ProductsPage");

class POManager {
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
module.exports = { POManager };
