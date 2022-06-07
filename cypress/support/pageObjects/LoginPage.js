class LoginPage {
    constructor() {
    }
    openPage() {
        cy.visit('https://www.saucedemo.com/');
    }

    enterUserName() {
        return cy.get('[data-test="username"]');
    }

    enterPassword() {
        return cy.get('[data-test="password"]');
    }

    clickLoginButton() {
        return cy.get('#login-button');
    }
}
export default LoginPage