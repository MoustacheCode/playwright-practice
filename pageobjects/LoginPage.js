export class LoginPage {
    constructor(page) {
        this.userNameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginBtn = page.locator('[data-test="login-button"]');
        this.loginErrorMessage = page.locator('[data-test="error"]');
        this.page = page;
    }

    async goTo() {
        await this.page.goto(process.env.BASE_URL);
    }

    async login(userNameInput, passwordInput) {
        await this.userNameInput.fill(userNameInput);
        await this.passwordInput.fill(passwordInput);
        await this.loginBtn.click();
        await this.page.waitForLoadState("networkidle");
    }
}
