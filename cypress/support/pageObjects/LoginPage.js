class LoginPage {
    constructor() {
    }
    openPage() {
        cy.visit('https://www.saucedemo.com/');
    }

    userName() {
        return cy.get('[data-test="username"]');
    }

    password() {
        return cy.get('[data-test="password"]');
    }

    loginButton() {
        return cy.get('#login-button');
    }

    signIn(userName, password) {
        this.userName().type(userName);
        this.password().type(password);
        this.loginButton().click();
    }

}
export default LoginPage