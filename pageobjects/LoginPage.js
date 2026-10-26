export class LoginPage {
    constructor(page) {
        this.userNameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.page = page;
    }

    async goTo() {
        await this.page.goto(process.env.BASE_URL);
    }

    async validLogin(userNameInput, passwordInput) {
        await this.userNameInput.fill(userNameInput);
        await this.passwordInput.fill(passwordInput);
        await this.loginBtn.click();
        await this.page.waitForLoadState("networkidle");
    }
}

module.exports = { LoginPage };
