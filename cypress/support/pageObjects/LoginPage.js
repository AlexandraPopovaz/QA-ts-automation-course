class LoginPage {
    constructor() {
    }
    openPage() {
        cy.visit('https://www.saucedemo.com/');
    }

    username() {
        return cy.get('[data-test="username"]');
    }

    password() {
        return cy.get('[data-test="password"]');
    }

    loginButton() {
        return cy.get('#login-button');
    }

    signIn(username, password) {
        this.username().type(username);
        this.password().type(password);
        this.loginButton().click();
    }

}
export default LoginPage